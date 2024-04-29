export default function ContentSection({ imageSource, header, paragraphOne, paragraphTwo }: {
  imageSource: string, 
  header: string, 
  paragraphOne: string, 
  paragraphTwo: string
}) {
    return (
      <div>
        <img src={imageSource} className="App-logo" alt="logo" />
        <div>
          <h1>{header}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
        </div>
      </div>
    )
  }