import { Link } from "react-router-dom";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineBook,
  AiOutlineHeart,
  AiOutlineFieldTime,
  AiOutlineMenu,
  AiOutlineSetting,
  AiOutlineInfoCircle,
  AiOutlineComment,
} from "react-icons/ai";
import { BsPencilSquare, BsCursorText, BsSave } from "react-icons/bs";
import "./Chapter.scss";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import PopoverBase from "../../components/PopoverBase";
const Chapter = () => {
  const ChapterList = (
    <PopoverBase>
      {{
        header: <div>Chapterlist</div>,
        body: <div>Chapter...</div>,
      }}
    </PopoverBase>
  );
  const Setting = (
    <PopoverBase>
      {{
        header: <div>Setting</div>,
        body: <div>Chapter...</div>,
      }}
    </PopoverBase>
  );

  return (
    <>
      <div className="card card-body">
        <div className="d-flex justify-content-between">
          <Link>
            Chuong truoc <AiOutlineArrowLeft />
          </Link>
          <Link>
            Chuong sau <AiOutlineArrowRight />
          </Link>
        </div>
        <div className="h1">Chương 0: Mở đầu</div>
        <ul className="list-unstyled d-flex justify-content-start">
          <li className="mx-2">
            <Link>
              <AiOutlineBook />
              Ta mot nguoi nem lang tan the
            </Link>
          </li>
          <li className="mx-2">
            <Link>
              <BsPencilSquare />
              Diep mac
            </Link>
          </li>
          <li className="mx-2">
            <BsCursorText />
            1333 chu
          </li>
          <li className="mx-2">
            <AiOutlineHeart />
            28 cam xuc
          </li>
          <li className="mx-2">
            <AiOutlineFieldTime />
            2022-04-27 20:36:27
          </li>
        </ul>
        <div>
          Năm 2012, thời tiết sáng sủa, bầu trời hết sức Lam.Sân bay."Trần Trần
          nghe lời, Trần Trần nghe lời, mụ mụ sẽ trở lại." Một vị vẽ lấy đồ
          trang sức trang nhã cô gái trẻ tuổi, ôn nhu sờ lên trước mặt hài tử,
          ánh mắt bên trong lộ ra không bỏ."Mụ mụ, vậy ngươi lúc nào thì trở
          về.""Ừm. . . Chờ chúng ta nhà Trần Trần trở thành dũng cảm, ánh nắng,
          hiền lành tiểu đại nhân lúc, mụ mụ sẽ xuất hiện tại Trần Trần trước
          mặt, có được hay không.""Tốt, mụ mụ, ta nhất định sẽ trở thành dạng
          này người.""Thật ngoan, đây là mụ mụ đưa cho Trần Trần nhỏ búp bê gấu,
          dùng sau mụ mụ không tại, liền từ nhỏ búp bê gấu làm bạn nhà chúng ta
          Trần Trần.""Ừm, cám ơn mụ mụ.""Mụ mụ cùng ba ba nói chút chuyện, Trần
          Trần cùng a di tới trước bên cạnh chờ mụ mụ có được hay
          không?""Được."Non nớt hài đồng ôm trong ngực nhỏ búp bê gấu, bị a di
          dắt đến phương xa.Hài đồng cẩn thận mỗi bước đi, làm bộ đáng thương
          nhìn xem mụ mụ.Cô gái trẻ tuổi từ đầu tới cuối duy trì lấy ôn hòa mỉm
          cười, hướng phía Tiểu Trần Trần phất phất tay.. . ."Nghê, bệnh của
          ngươi, ngày giờ không nhiều, ngươi tình nguyện ra ngoại quốc đụng hi
          vọng, cũng không muốn trong nhà bồi Trần Trần cuối cùng cái kia một
          chút thời gian sao?" Một vị ăn mặc đồ vét nam tử chậm rãi nói ra.Mặt
          mũi của hắn hết sức anh tuấn, nhìn về phía nữ tử ánh mắt, từ đầu tới
          Năm 2012, thời tiết sáng sủa, bầu trời hết sức Lam.Sân bay."Trần Trần
          nghe lời, Trần Trần nghe lời, mụ mụ sẽ trở lại." Một vị vẽ lấy đồ
          trang sức trang nhã cô gái trẻ tuổi, ôn nhu sờ lên trước mặt hài tử,
          ánh mắt bên trong lộ ra không bỏ."Mụ mụ, vậy ngươi lúc nào thì trở
          về.""Ừm. . . Chờ chúng ta nhà Trần Trần trở thành dũng cảm, ánh nắng,
          hiền lành tiểu đại nhân lúc, mụ mụ sẽ xuất hiện tại Trần Trần trước
          mặt, có được hay không.""Tốt, mụ mụ, ta nhất định sẽ trở thành dạng
          này người.""Thật ngoan, đây là mụ mụ đưa cho Trần Trần nhỏ búp bê gấu,
          dùng sau mụ mụ không tại, liền từ nhỏ búp bê gấu làm bạn nhà chúng ta
          Trần Trần.""Ừm, cám ơn mụ mụ.""Mụ mụ cùng ba ba nói chút chuyện, Trần
          Trần cùng a di tới trước bên cạnh chờ mụ mụ có được hay
          không?""Được."Non nớt hài đồng ôm trong ngực nhỏ búp bê gấu, bị a di
          dắt đến phương xa.Hài đồng cẩn thận mỗi bước đi, làm bộ đáng thương
          nhìn xem mụ mụ.Cô gái trẻ tuổi từ đầu tới cuối duy trì lấy ôn hòa mỉm
          cười, hướng phía Tiểu Trần Trần phất phất tay.. . ."Nghê, bệnh của
          ngươi, ngày giờ không nhiều, ngươi tình nguyện ra ngoại quốc đụng hi
          vọng, cũng không muốn trong nhà bồi Trần Trần cuối cùng cái kia một
          chút thời gian sao?" Một vị ăn mặc đồ vét nam tử chậm rãi nói ra.Mặt
          mũi của hắn hết sức anh tuấn, nhìn về phía nữ tử ánh mắt, từ đầu tới
          Năm 2012, thời tiết sáng sủa, bầu trời hết sức Lam.Sân bay."Trần Trần
          nghe lời, Trần Trần nghe lời, mụ mụ sẽ trở lại." Một vị vẽ lấy đồ
          trang sức trang nhã cô gái trẻ tuổi, ôn nhu sờ lên trước mặt hài tử,
          ánh mắt bên trong lộ ra không bỏ."Mụ mụ, vậy ngươi lúc nào thì trở
          về.""Ừm. . . Chờ chúng ta nhà Trần Trần trở thành dũng cảm, ánh nắng,
          hiền lành tiểu đại nhân lúc, mụ mụ sẽ xuất hiện tại Trần Trần trước
          mặt, có được hay không.""Tốt, mụ mụ, ta nhất định sẽ trở thành dạng
          này người.""Thật ngoan, đây là mụ mụ đưa cho Trần Trần nhỏ búp bê gấu,
          dùng sau mụ mụ không tại, liền từ nhỏ búp bê gấu làm bạn nhà chúng ta
          Trần Trần.""Ừm, cám ơn mụ mụ.""Mụ mụ cùng ba ba nói chút chuyện, Trần
          Trần cùng a di tới trước bên cạnh chờ mụ mụ có được hay
          không?""Được."Non nớt hài đồng ôm trong ngực nhỏ búp bê gấu, bị a di
          dắt đến phương xa.Hài đồng cẩn thận mỗi bước đi, làm bộ đáng thương
          nhìn xem mụ mụ.Cô gái trẻ tuổi từ đầu tới cuối duy trì lấy ôn hòa mỉm
          cười, hướng phía Tiểu Trần Trần phất phất tay.. . ."Nghê, bệnh của
          ngươi, ngày giờ không nhiều, ngươi tình nguyện ra ngoại quốc đụng hi
          vọng, cũng không muốn trong nhà bồi Trần Trần cuối cùng cái kia một
          chút thời gian sao?" Một vị ăn mặc đồ vét nam tử chậm rãi nói ra.Mặt
          mũi của hắn hết sức anh tuấn, nhìn về phía nữ tử ánh mắt, từ đầu tới
        </div>
      </div>
      <div className="left-menu">
        <OverlayTrigger trigger="click" placement="left" overlay={ChapterList}>
          <button className="chapter-list">
            <AiOutlineMenu />
          </button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="left" overlay={Setting}>
          <button className="setting">
            <AiOutlineSetting />
          </button>
        </OverlayTrigger>
      </div>
      /
    </>
  );
};
export default Chapter;
