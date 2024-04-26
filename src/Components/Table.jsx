import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteBooking } from "../redux/actions";
const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const id = parseInt(e.currentTarget.id);
    dispatch(deleteBooking(id));
  }
  console.log(data);
  return (
    <>
      {data.length && (
        <div className="max-w-6xl mx-auto mt-5 bg-white">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  
                  <th>Destination From</th>
                  <th>Destination To</th>
                  <th>Guests</th>
                  <th>Journey Date</th>
                  <th>Travel Class</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <tr key ={index}>
                    <td>{data.from}</td>
                    <td>{data.to}</td>
                    <td>{data.guests}</td>
                    <td>{data.date}</td>
                    <td>{data.ticketClassName}</td>
                    <td><button id ={`${data.id}`} onClick={(e) => handleDelete(e)} className="btn-xs bg-red-500 text-white"><RiDeleteBin6Line /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
