import "./App.css";
import GlobalStyle from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./layouts/home";
import Admin from "./screens/Admin";
import Add from "./screens/Admin/Add";
import Infomation from "./screens/Infomation";
import ListEmployee from "./screens/Manager";
import BrowserCTV from "./screens/Manager/BrowserCTV";
import AvailableContract from "./screens/Manager/AvailableContract";
import Data from "./screens/Manager/Data";
import Report from "./screens/Manager/Report";
import MainReport from "./screens/Manager/Report/Main/MainReport";
import ListCTV from "./screens/Leader";
import DetailCTV from "./screens/Leader/DetailCTV";
import EditCTV from "./screens/Leader/EditCTV";
import CommissionReport from "./screens/Leader/CommissionReport";
import DetailCommissionReport from "./screens/Leader/CommissionReport/Detail";
import ReportActivity from "./screens/Leader/ReportActivity";
import ReportActivityCtv from "./screens/Leader/ReportActivity/ReportActivityCtv";
import DetailReportActivityCtv from "./screens/Leader/ReportActivity/ReportActivityCtv/Detail";
import ListCustomer from "./screens/Ctv";
import AddCustomer from "./screens/Ctv/AddCustomer";
import DetailCustomer from "./screens/Ctv/DetailCustomer";
import ReportCtv from "./screens/Ctv/Report";

function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <Routes>
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/dang-ky" element={<Register />} />
          <Route path="/" element={<Home />}>
            <Route path="/danh-sach-tai-khoan" element={<Admin />} />
            <Route path="/them-moi-tai-khoan" element={<Add />} />
            <Route path="/thong-tin-tai-khoan" element={<Infomation />} />
            {/* // */}
            <Route path="/danh-sach-nhan-vien" element={<ListEmployee />} />
            <Route path="/duyet-ctv" element={<BrowserCTV />} />
            <Route path="/hop-dong-san" element={<AvailableContract />} />
            <Route path="/bao-cao" element={<Report />} />
            <Route path="/bao-cao-chi-tiet" element={<MainReport />} />
            <Route path="/phan-tich-so-lieu" element={<Data />} />
            {/* // */}
            <Route path="/danh-sach-ctv" element={<ListCTV />} />
            <Route path="/chi-tiet-ctv" element={<DetailCTV />} />
            <Route path="/sua-thong-tin-trang-thai-ctv" element={<EditCTV />} />
            <Route path="/bao-cao-hoa-hong-dv" element={<CommissionReport />} />
            <Route
              path="/chi-tiet-bao-cao-hoa-hong-dv"
              element={<DetailCommissionReport />}
            />
            <Route path="/bao-cao-hoat-dong" element={<ReportActivity />} />
            <Route
              path="/bao-cao-hoat-dong-ctv-cua-quanly"
              element={<ReportActivityCtv />}
            />
            <Route
              path="/chi-tiet-bao-cao-hoat-dong-ctv-cua-quanly"
              element={<DetailReportActivityCtv />}
            />
            {/* // */}
            <Route path="/danh-sach-kh" element={<ListCustomer />} />
            <Route path="/them-moi-kh" element={<AddCustomer />} />
            <Route path="/chi-tiet-kh" element={<DetailCustomer />} />
            <Route path="/bao-cao-hoat-dong-ctv" element={<ReportCtv />} />
          </Route>
        </Routes>
      </div>
    </GlobalStyle>
  );
}

export default App;
