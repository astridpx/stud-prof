import { useParams } from "react-router-dom";
import Pagewrapper from "../../components/page-wrapper";

const StudentDetails = () => {
  const { name } = useParams();

  return (
    <>
      <Pagewrapper>
        <div className="h-[85vh] w-full p-4 ">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold ">{name}</h1>
            <p className="max-w-3xl mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nobis dolorum, deserunt explicabo alias dolore, molestias fugiat
              itaque quis voluptas aspernatur velit ullam, eius ad? Odit eos
              natus illum illo quaerat rem adipisci doloribus dolor consequuntur
              tempore molestias, consequatur nemo maxime ipsum facilis? Nobis
              reiciendis fuga impedit. Incidunt, consequatur repellat?
            </p>
            <p className="max-w-3xl mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nobis dolorum, deserunt explicabo alias dolore, molestias fugiat
              itaque quis voluptas aspernatur velit ullam, eius ad? Odit eos
              natus illum illo quaerat rem adipisci doloribus dolor consequuntur
              tempore molestias, consequatur nemo maxime ipsum facilis? Nobis
              reiciendis fuga impedit. Incidunt, consequatur repellat?
            </p>
          </div>
        </div>
      </Pagewrapper>
    </>
  );
};

export default StudentDetails;
