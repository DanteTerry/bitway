import { Property } from "@/model/propertyModel";

export const getProperty = async ({
  page = 1,
  limit = 6,
  query,
  category,
  price,
}) => {
  try {
    const skip = (page - 1) * limit;

    const pipeline = [];

    if (query) {
      pipeline.push({
        $match: {
          $or: [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
          ],
        },
      });
    }

    if (category) {
      pipeline.push({ $match: { "details.propertyCategory": category } });
    }

    if (price === "lowToHigh") {
      pipeline.push({ $sort: { price: 1 } });
    }

    if (price === "highToLow") {
      pipeline.push({ $sort: { price: -1 } });
    }

    pipeline.push({ $skip: skip }, { $limit: limit });

    let property = await Property.aggregate(pipeline);

    property = JSON.parse(JSON.stringify(property));

    return property;
  } catch (error) {
    console.error(error.message);
  }
};