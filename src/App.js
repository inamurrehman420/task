import logo from './logo.svg';
import './App.css';
import AutoInvest from './components/Dashbard';
import FAQs from './components/faq';
function App() {
  return (
    <div className='row' style={{display:'flex'}}>
      <div className='col-4'>
          <Sidebar />
     </div>
     <div className='col-8'>
      <MainContent />
      </div>
    </div>
  );
}

const Sidebar = () => (
    <div className="container mt-5">
        <div className="sidebar p-4">
            <div className="logo mb-4">
                <img src="logo.png" alt="Lendo Logo" className="img-fluid" />
            </div>
            <div className="balance mb-4 d-flex w-100">
                <img src="wallet.png" alt="Lendo Logo" className="img-fluid w-25" />
                <div className="w-50">
                    <h3 >62,540 SAR</h3>
                    <p>Account Balance</p>
                </div>
                <div className="w-25">
                    >
                </div>

            </div>
            <div className="buttons mb-4">
                <button className="btn btn-primary btn-block mb-2">Deposit</button>
                <button className="btn btn-outline-primary btn-block">Withdraw</button>
            </div>
            <div className="verification mb-4">
                <p>To withdraw more than 10,000 SAR you need to verify your banking account.</p>
            </div>
            <div className="illustration mb-4">
                <img src="frame.png" alt="Illustration" className="img-fluid" />
            </div>
            <div className="trust">
                <h5>Why Should You Trust It?</h5>
                <p>Because of this and that. Anyway investing is very good.</p>
            </div>
        </div>
    </div>
);

const MainContent = () => (
  <>
  <div className="">

    <AutoInvest />
      <FAQs/>
  </div>
  </>
);
export default App;
