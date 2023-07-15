import { useQuery } from "react-query";
import Pagewrapper from "../../components/page-wrapper";
import StudentCards from "../../components/Student-Cards";
import { fetchStudent } from "../../APIs/api";
// import { StudentsData } from "../../helpers/Students.ts";

const Students = () => {
  const {
    isLoading,
    isError,
    data: students,
    error,
  }: any = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudent,
  });

  if (isLoading) return "loading...";
  if (isError) return `Error: ${error.response.data.message}`;

  return (
    <>
      <Pagewrapper>
        <section className="h-max p-4 w-full flex gap-4 flex-wrap">
          {/* CARDS */}
          {students.data.map((props: StudentProp) => {
            return (
              <StudentCards
                key={props._id}
                id={props._id}
                name={props.fullname}
                age={props.age}
                birthday={props.birthday}
                gender={props.gender}
                status={props.status}
                email={props.email}
                phone={props.phone}
              />
            );
          })}
        </section>
      </Pagewrapper>
    </>
  );
};

export default Students;
