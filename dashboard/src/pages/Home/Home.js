import Dashboard from "../Dashboard/Dashboard";
import TopBar from "../../components/Layout/TopBar";


const Home = () => {
  // const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const verifyUser = async() => {

  //     try{
  //       await axios.get("http://localhost:3002/api/auth/user/verify",
  //         {withCredentials: true });

  //       setLoading(false);
  //     } catch (error) {
  //       navigate("/login");
  //     }
  //   };

  //   verifyUser();
  // }, [navigate]);

  // if (loading) {
  //   return <div>Checking authentication...</div>;
  // }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;