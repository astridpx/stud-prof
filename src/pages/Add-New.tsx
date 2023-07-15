import { useMutation, useQueryClient } from "react-query";
import Pagewrapper from "../components/page-wrapper";
import { useState } from "react";
import { CreateStudent } from "../APIs/api";

const AddNewStudent = () => {
  const queryClient = useQueryClient();
  const [student, setStudent] = useState<IStudent>({
    fullname: "",
    age: 1,
    birthday: "",
    gender: "",
    status: "",
    email: "",
    phone: "",
  });

  const StudentMutation: any = useMutation({
    mutationFn: CreateStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["students"] });
      setStudent({
        fullname: "",
        age: 1,
        birthday: "",
        gender: "",
        status: "",
        email: "",
        phone: "",
      });
      console.log("success bro!");
    },
  });

  const HandleChangeInpput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await StudentMutation.mutate({ ...student });
  };

  return (
    <>
      <Pagewrapper>
        <div className="min-h-[81vh] ">
          <h1 className="font-semibold text-2xl text-center my-8">
            Add New Student
          </h1>
          {/* {StudentMutation.isError?
          (<p className="text-center my-8">{StudentMutation.error.message}</p>):null} */}
          {StudentMutation.isError ? (
            <p className="text-center my-8">
              {StudentMutation.error.response.data.message}
            </p>
          ) : null}

          <form className="grid place-content-center" onSubmit={HandleSubmit}>
            <div className=" flex justify-center space-x-4">
              <div className=" flex flex-col space-y-4 ">
                <label htmlFor="name">Name :</label>
                <label htmlFor="age">Age :</label>
                <label htmlFor="bday">Birthday :</label>
                <label htmlFor="gender">Gender : </label>
                <label htmlFor="status">Status : </label>
                <label htmlFor="email">Email : </label>
                <label htmlFor="phone">Phone : </label>
              </div>

              <div className=" flex flex-col space-y-4 ">
                <input
                  type="text"
                  required
                  value={student.fullname}
                  name="fullname"
                  onChange={HandleChangeInpput}
                />
                <input
                  type="number"
                  min={1}
                  required
                  value={student.age}
                  name="age"
                  onChange={HandleChangeInpput}
                />
                <input
                  type="date"
                  required
                  value={student.birthday}
                  name="birthday"
                  onChange={HandleChangeInpput}
                />
                <input
                  type="text"
                  required
                  value={student.gender}
                  name="gender"
                  onChange={HandleChangeInpput}
                />
                <input
                  type="text"
                  required
                  value={student.status}
                  name="status"
                  onChange={HandleChangeInpput}
                />
                <input
                  type="email"
                  required
                  value={student.email}
                  name="email"
                  onChange={HandleChangeInpput}
                />
                <input
                  type="text"
                  required
                  value={student.phone}
                  name="phone"
                  onChange={HandleChangeInpput}
                />
              </div>
            </div>

            <button
              className="my-8 bg-pink-300 w-max px-6 py-2 rounded text-gray-100 translate-x-[80%]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </Pagewrapper>
    </>
  );
};

export default AddNewStudent;
