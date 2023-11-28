<div>
<div className="accordion mb-2" id="accordionExample">
  {getcategorydata.map((data, index) => {
    return (
      <div key={data.id} className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${data._id}`}
            aria-expanded="true"
            aria-controls={`collapseOne${data._id}`}
          >
            <img
              src={
                data.images == null
                  ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgPtF8x4lhf4oH0rSo-mEMnTMGcUZhXmXvg&usqp=CAU"
                  : `http://13.233.151.208:8000/images/${data.images}`
              }
              width={"50px"}
              height={"50px"}
              style={{
                borderRadius: "50%",
                marginRight: ".3rem",
              }}
            />{" "}
            {data.name}
          </button>
        </h2>

        <div
          id={`collapse${data._id}`}
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="d-flex d-flex justify-content-between">
              <p className="">{data.subCategories}</p>
              <div className="col-3 d-flex">
                <div className="content-center">
                  <i
                    className="bi bi-pencil-fill"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                <div className="content-center">
                  <Switch defaultChecked color="success" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>
</div>