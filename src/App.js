export default function app() {

   let list = [1,1,1,1,1,1,1,1,1]; 
  return (
    <div>
      <div>
        <h1
          style={{
            color: "white",
            backgroundColor: "royalblue",
            textAlign: "center",
            marginBottom: "0px",
          }}
        >
          TweetBook
        </h1>
      </div>
      {list.map( () => {
           return <p className="alert alert-info p-2 mt-1">
           Hello this is a demo of a paragraphHello this is a demo of a
           paragraphHello this is a demo of a paragraphHello this is a demo of a
           paragraph Hello this is a demo of a paragraphHello this is a demo of a
           paragraphHello this is a demo of a paragraphHello this is a demo of a
           paragraphHello this is a demo of a paragraphHello this is a demo of a
           paragraph
         </p>
      })}
    </div>
  );
}
