import { PUBLIC_URL } from "../utils/const";
const role = "";
export const menu =
  role === "ADMIN"
    ? [
        // menu của Admin
        {
          name: "Danh sách tài khoản",
          icon: `${PUBLIC_URL}/icons/list.svg`,
          link: "/danh-sach-tai-khoan",
          dropdown: []
        },
        {
          name: "Thêm mới tài khoản",
          icon: `${PUBLIC_URL}/icons/add-user.svg`,
          link: "/them-moi-tai-khoan",
          dropdown: []
        }
      ]
    : // [
      //     // menu của giám đốc
      //     {
      //       name: "Danh sách CTV",
      //       icon: `${PUBLIC_URL}/icons/list.svg`,
      //       link: "/danh-sach-nhan-vien",
      //       dropdown: []
      //     },
      //     {
      //       name: "Duyệt CTV",
      //       icon: `${PUBLIC_URL}/icons/notii.svg`,
      //       link: "/duyet-ctv",
      //       dropdown: []
      //     },
      //     {
      //       name: "Hợp đồng sẵn",
      //       icon: `${PUBLIC_URL}/icons/contract.svg`,
      //       link: "/hop-dong-san",
      //       dropdown: []
      //     },
      //     {
      //       name: "Báo cáo",
      //       icon: `${PUBLIC_URL}/icons/report.svg`,
      //       link: "/bao-cao",
      //       dropdown: []
      //     },
      //     {
      //       name: "Phân tích số liệu",
      //       icon: `${PUBLIC_URL}/icons/data.svg`,
      //       link: "/phan-tich-so-lieu",
      //       dropdown: []
      //     }
      //   ];
      // [
      //   // menu của quản lý CTV
      //   {
      //     name: "Danh sách CTV",
      //     icon: `${PUBLIC_URL}/icons/list.svg`,
      //     link: "/danh-sach-ctv",
      //     dropdown: []
      //   },
      //   {
      //     name: "Báo cáo hoa hồng dv",
      //     icon: `${PUBLIC_URL}/icons/report.svg`,
      //     link: "/bao-cao-hoa-hong-dv",
      //     dropdown: []
      //   },
      //   {
      //     name: "Báo cáo hoạt động",
      //     icon: `${PUBLIC_URL}/icons/data.svg`,
      //     link: "/bao-cao-hoat-dong",
      //     dropdown: []
      //   }
      // ];
      [
        // menu của CTV
        {
          name: "Danh sách KH",
          icon: `${PUBLIC_URL}/icons/list.svg`,
          link: "/danh-sach-kh",
          dropdown: []
        },
        {
          name: "Thêm mới KH",
          icon: `${PUBLIC_URL}/icons/report.svg`,
          link: "/them-moi-kh",
          dropdown: []
        },
        {
          name: "Báo cáo hoạt động",
          icon: `${PUBLIC_URL}/icons/data.svg`,
          link: "/bao-cao-hoat-dong-ctv",
          dropdown: []
        }
      ];
