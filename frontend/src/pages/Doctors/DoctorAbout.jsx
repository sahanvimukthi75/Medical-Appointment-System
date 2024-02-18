import React from "react";
import { FormateDate } from "../../utils/FormateDates";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About Of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Dasun Rajapaksha
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente
          reiciendis porro voluptas numquam dolorum, rem praesentium ab, placeat
          facere, consequatur accusantium omnis aliquid tempore fugiat nam non
          impedit quibusdam.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
              {FormateDate(`2-03-2010`)} - {FormateDate(`2-03-2014`)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              General Hospital Colombo
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {FormateDate(`12-05-2008`)} - {FormateDate(`12-05-2015`)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              General Hospital Colombo
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {FormateDate(`2-03-2010`)} - {FormateDate(`2-03-2014`)}
                </span>

                <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
              General Hospital Colombo
            </p>
            </li>

            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {FormateDate(`2-03-2010`)} - {FormateDate(`2-03-2014`)}
                </span>

                <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
              General Hospital Colombo
            </p>
            </li>
        </ul>

      </div>
    </div>
  );
};

export default DoctorAbout;
