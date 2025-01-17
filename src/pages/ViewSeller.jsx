import Sellercategries from "../components/Sellercategories"
import Sellerhero from "../components/Sellerhero"

const ViewSeller = () => {
  return (
    <div className="bg-gradient-to-b from-white to-pink-200 min-h-screen">
        <Sellerhero/>
        <Sellercategries/>
    </div>
  )
}

export default ViewSeller