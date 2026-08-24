import "./App.css";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [movie, setMovie] = useState("Avengers");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [bookingId, setBookingId] = useState("");

  // Page 1 - Movie Selection
  if (page === 1) {
    return (
      <div className="booking">
        <h1>Select a Movie and Book Seats</h1>

        <label>Select a Movie: </label>

        <select
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        >
          <option>Avengers</option>
          <option>Spider-Man</option>
          <option>Batman</option>
          <option>KGF</option>
        </select>

        <h2>Available Movies</h2>

        <div className="movies">
          <button onClick={() => setMovie("Avengers")}>
            Avengers
          </button>

          <button onClick={() => setMovie("Spider-Man")}>
            Spider-Man
          </button>

          <button onClick={() => setMovie("Batman")}>
            Batman
          </button>

          <button onClick={() => setMovie("KGF")}>
            KGF
          </button>
        </div>

        <button className="book" onClick={() => setPage(2)}>
          Book Seat
        </button>
      </div>
    );
  }

  // Page 2 - Movie Details
  if (page === 2) {
    return (
      <div className="booking">
        <h1>Movie Details</h1>

        <h2>{movie}</h2>

        <p><b>Genre:</b> Action</p>
        <p><b>Language:</b> English</p>
        <p><b>Duration:</b> 2 Hours 30 Minutes</p>

        <p>
          Enjoy this exciting movie with your friends and family.
        </p>

        <button className="book" onClick={() => setPage(3)}>
          Book Seat
        </button>
      </div>
    );
  }

  // Page 3 - Booking Form
  if (page === 3) {
    return (
      <div className="booking">
        <h1>Book Your Seat</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            let id = "BK" + Math.floor(10000 + Math.random() * 90000);

            setBookingId(id);
            setPage(4);
          }}
        >
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Enter Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          <button className="book" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }

  // Page 4 - Booking Successful
  if (page === 4) {
    return (
      <div className="booking">
        <h1>Seat Booked Successfully!</h1>

        <h2>Booking Details</h2>

        <p><b>Booking ID:</b> {bookingId}</p>
        <p><b>Movie:</b> {movie}</p>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Mobile:</b> {mobile}</p>

        <button className="book" onClick={() => setPage(1)}>
          Book Another Seat
        </button>
      </div>
    );
  }
}

export default App;
