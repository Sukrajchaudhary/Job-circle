import { Bookmark, BriefcaseBusiness, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const UserDasboard: React.FC = () => {
  return (
    <section>
      <div className="">
        <div className="cursor-pointer">
          <h1 className="font-bold text-lg p-3 ">
            Hey there, Sukraj Chaudhary!
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4">
            <Link to="/Employee/Home/application">
              {" "}
              <div className="max-w-56 bg-white h-32 rounded-lg">
                <div className="flex justify-between items-center p-8">
                  <div>
                    <h1 className="font-bold text-lg">Appllied</h1>
                    <h1 className="font-bold text-lg">3</h1>
                  </div>
                  <div className="">
                    <BriefcaseBusiness
                      size={38}
                      color="#18af36"
                      strokeWidth={3}
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/Employee/Home/application">
              <div className="max-w-56 bg-white h-32 rounded-lg">
                <div className="flex justify-between items-center p-8">
                  <div>
                    <h1 className="font-bold text-lg">Rejected</h1>
                    <h1 className="font-bold text-lg">3</h1>
                  </div>
                  <div className="">
                    <X size={38} color="#af1818" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </Link>
            <div className="max-w-56 bg-white h-32 rounded-lg">
              <div className="flex justify-between items-center p-8">
                <div>
                  <h1 className="font-bold text-lg">Bookmarks</h1>
                  <h1 className="font-bold text-lg">3</h1>
                </div>
                <div className="">
                  <Bookmark size={38} color="#867979" strokeWidth={3} />
                </div>
              </div>
            </div>
            <div className="max-w-56 bg-white h-32 rounded-lg">
              <div className="flex justify-between items-center p-8">
                <div>
                  <h1 className="font-bold text-lg">Appllied</h1>
                  <h1 className="font-bold text-lg">3</h1>
                </div>
                <div className="">
                  <BriefcaseBusiness
                    size={38}
                    color="#18af36"
                    strokeWidth={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDasboard;
