// import React from "react";
import { Link } from "react-router-dom";

const StudentCards = (props: any) => {
  return (
    <>
      <div className="h-max w-max bg-yellow-200 py-4 px-8 rounded">
        <h1 className="text-xl font-bold cursor-pointer">
          <span>
            <Link to={`/Students/${props.name}/${props.id}`}>{props.name}</Link>
          </span>
        </h1>
        <div className="flex space-x-4 p-4 h-full w-full">
          <div className="font-semibold space-y-1">
            <h1>Age :</h1>
            <h1>Birthday :</h1>
            <h1>Gender :</h1>
            <h1>Status :</h1>
            <h1>Email :</h1>
            <h1>Phone :</h1>
          </div>

          <div className="space-y-1">
            <p>{props.age}</p>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.status}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCards;
