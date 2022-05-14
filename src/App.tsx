
import {Card} from "./Card"
import {GridWrapper} from "./styles.ts"


export default function App() {
  return (
    <div className="App">
      <GridWrapper>
        {
          [...Array(9)].map((item, index) => (
            <Card index={index}/>
          ))
        }
      </GridWrapper>
    </div>
  );
}
