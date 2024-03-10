import Image from "next/image";
import React from "react";
import bed from "@/assets/bed.svg";
import bath from "@/assets/bath.svg";
import parking from "@/assets/parking.svg";

import Link from "next/link";
import Buttons from "./Buttons";

function PropertyPagePropertyCard({ property, children }) {
  return (
    <div className="flex w-full items-center gap-6 rounded-lg border-2  p-4  shadow-sm">
      <Link className="h-[90%] w-[50%]" href={`/properties/${property._id}`}>
        <Image
          src={property.propertyImages[0]}
          width={0}
          height={0}
          sizes="50%"
          alt="property image"
          className="h-full w-fit rounded-2xl object-cover  "
        />
      </Link>

      <div className="flex w-full flex-col gap-2 px-4">
        <h5 className="font-playfair text-2xl font-bold">
          Luxury Apartment in California
        </h5>
        <h6 className="text-xl">$ 2000000</h6>
        <p className="w-3/4 text-gray-500">
          Using it can make you sound like you have been studying english for a
          long time. Using it can make you sound like you have been studying
          english for a long time.
        </p>

        <div className="flex items-center gap-5 border-b-2 pb-3 ">
          <div className="flex items-center gap-3">
            <Image src={bed} width={25} height={0} alt="bed icon" />
            <span className="text-lg">{property.details.bedrooms}</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={bath} width={25} height={0} alt="bath icon" />
            <span className="text-lg">{property.details.bathrooms}</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={parking} width={25} height={0} alt="car icon" />
            <span className="text-lg capitalize">
              {property.details.parking}
            </span>
          </div>
        </div>

        <div className="flex w-full justify-between px-2">
          <div className="flex items-center gap-3">
            <Image
              src={property.user.image}
              width={40}
              height={40}
              alt="user picture"
              className="rounded-full"
            />
            <span>{property.owner.name}</span>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export default PropertyPagePropertyCard;
