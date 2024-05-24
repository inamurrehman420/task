import logo from './logo.svg';
import './App.css';
import AutoInvest from './components/Dashbard';
import FAQs from './components/faq';
function App() {
  return (
    <div className='row' style={{display:'flex'}}>
      <div className='col-3'>
          <Sidebar />
     </div>
     <div className='col-9'>
      <MainContent />
      </div>
    </div>
  );
}

const Sidebar = () => (
    <div className="container mt-5">
        <div className="sidebar py-4 px-5  border-end">
            <div className="logo mb-4">
                <img src="logo.png" alt="Lendo Logo" className="img-fluid logo mb-4" />
            </div>
            <div className="container my-5">
                <div className="balance mb-4 d-flex w-100 mb-5">
                    <img src="wallet.png" alt="Lendo Logo" className="img-fluid me-3"/>
                    <div className="w-50">
                        <h4>62,540 SAR</h4>
                        <p>Account Balance</p>
                    </div>
                    <div className="w-25 d-flex align-items-center justify-content-center">
                        <span>&gt;</span>
                    </div>
                </div>
            </div>
            <div className="buttons mb-5 d-flex">
                <button className="btn btn-primary btn-block px-4 p-2 mb-2 me-3 rounded-pill">Deposit</button>
                <button className="btn btn-settings px-4 p-2 btn-block mb-2 rounded-pill">Withdraw</button>
            </div>
            <div className="verification d-flex mb-4">
                <img src="warning.png" alt="Lendo Logo" className="img-fluid warning-icon mt-1 me-2" style={{ width: 'auto', height: '20px' }} />
                <p className="text-left">To withdraw more than 10,000 SAR you need to verify your banking account.</p>
            </div>

            <div className="illustration mb-4">
                <img src="frame.png" alt="Illustration" className="img-fluid text-center w-50" />
            </div>
            <div className="trust px-5 text-center">
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
