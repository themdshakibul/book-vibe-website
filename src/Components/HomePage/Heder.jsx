import BooksImages from "../../assets/pngwing1.png";
const Heder = () => {
  return (
    <frames>
      <section className="container mx-auto px-2 mt-5 py-30 bg-base-300 rounded-2xl md:flex items-center justify-center gap-10 lg:gap-80">
        <div>
          <h2 className="text-7xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h2>
          <button className="btn btn-success font-bold mt-10">View The List</button>
        </div>
        <img src={BooksImages} alt="" />
      </section>
    </frames>
  );
};

export default Heder;
