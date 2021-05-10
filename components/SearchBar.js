const searchBar = ({onChange, placeholder}) => {
  return (
    <div className="search">
      <span className="searchspan">
        <img className="icon-search" alt="Search Identicons" src="../static/site/icon-search.svg" />
      </span>
      <input
        className="searchinput"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />

      <style jsx>{`
        .search {
          width: 400px;
          display: flex;
          flex-grow:1;
        }

        .icon-search {
          vertical-align: center;
        }
        .searchspan {
          border: none;
          background: white;
          
          padding: 5px 24px;
          text-align: center;
          color: #fff;
          border-radius: 30px 0 0 30px;
          font-size: 20px;
          vertical-align: middle;
        }
        .searchinput {
          flex-grow:1;
          border: none;
          border-left: none;
          padding: 5px;
          border-radius: 0 30px 30px 0;
          outline: none;
          font-size: 18px;
          color: #898C8F;
        }
      `}
      </style>
    </div>
  );
};

export default searchBar;