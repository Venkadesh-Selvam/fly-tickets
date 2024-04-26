import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { makeBooking } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const Booking = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const size = data.length;
  const [bookingData, setBookingData] = useState({});
  const handleChange = (e) => {
    // console.log(e.target.value)
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData);
  };
  const handleBook = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    if(Object.keys(bookingData).length === 5){
      dispatch(makeBooking({...bookingData, id:size + 1}))
    } else {
      alert("! Please Select Data Properly !")
    }
  };
  console.log(bookingData);
  return (
    <div className="md:mt-[160px] mt-[100px] mx-4 relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="flex flex-col md:flex-row">
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination From</p>
            <div className="flex flex-row">
              <select
                required
                onChange={(e) => handleChange(e)}
                name="from"
                id="from"
                className="outline-none p-2 w-full"
              >
                <option value="">Please Select</option>
                <option>New Delhi</option>
                <option>Kolkata</option>
                <option>Mumbai</option>
                <option>Kochi</option>
                <option>Chennai</option>
                <option>Banglore</option>
                <option>Hyderabad</option>
                <option>Ahmedabad</option>
                <option>Trichy</option>
                <option>Madurai</option>
              </select>
            </div>
          </div>
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Destination To</p>
            <div className="flex flex-row">
              <select
                name="to"
                id="to"
                required
                onChange={(e) => handleChange(e)}
                className="outline-none p-2 w-full"
              >
                <option value="">Please Select</option>
                <option>New Delhi</option>
                <option>Kolkata</option>
                <option>Mumbai</option>
                <option>Kochi</option>
                <option>Chennai</option>
                <option>Banglore</option>
                <option>Hyderabad</option>
                <option>Ahmedabad</option>
                <option>Trichy</option>
                <option>Madurai</option>
              </select>
            </div>
          </div>
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Guests</p>
            <div className="flex flex-row">
              <select
                name="guests"
                id="guests"
                required
                onChange={(e) => handleChange(e)}
                className="outline-none p-2 w-full"
              >
                <option value="">Please Select</option>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
                <option>5 Persons</option>
                <option>6 Persons</option>
                <option>7 Persons</option>
                <option>8 Persons</option>
                <option>9 Persons</option>
                <option>10 Persons</option>
              </select>
            </div>
          </div>
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Journey Date</p>
            <input
              type="date"
              name="date"
              required
              onChange={(e) => handleChange(e)}
              className="outline-none p-2 w-full"
            />
          </div>
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Travel Class</p>
            <div className="flex flex-row">
              <select
                name="ticketClassName"
                id="ticketClassName"
                required
                onChange={(e) => handleChange(e)}
                className="outline-none p-2 w-full"
              >
                <option value="">Please Select</option>
                <option>Bussiness</option>
                <option>Economy</option>
              </select>
            </div>
          </div>
          <button
            onClick={(e) => handleBook(e)}
            type="submit"
            className="bg-indigo-500 text-white px-8 py-1 space-x-2 flex items-center justify-center"
          >
            <FaPlus className="mr-1" />
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
