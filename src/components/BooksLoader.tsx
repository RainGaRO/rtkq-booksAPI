export const BooksLoader = () => (
  <div>
    <div className="ui segment h-[100vh]">
      <div className="ui active transition visible dimmer">
        <div className="content">
          <div className="ui indeterminate text loader">Preparing Files</div>
        </div>
      </div>
      <img
        src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
        className="ui image"
        alt="loader"
      />
    </div>
  </div>
);
