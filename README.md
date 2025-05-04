# project-nodejs-2-store_api
Đây là 1 dự án sử dụng NodeJS và framework ExpressJS
Dự án giúp em học :
  - Cách để sử dụng middleware
  - Học được cách giao tiếp của client và server
  - Học được cách co thể kết nối với MongooseDB
  - Học được cách sử dung middleware đê làm việc với errorHandle
  - Biết được 1 vài stausCode : 200,201,400,401,500
  - Cách hoạt động của mô hình mvc 
  - Cách JWT hoạt động và áp dụng 
  - Một vài chi tiết nhỏ cần để ý

## Demo
  _ Link deploy (em sử dụng Render để deoloy) :
    ## https://jwt-basics-haconghau0409.onrender.com/

## Flow hoạt động 
  -1.Mọi người có thể thấy được giao diện ghi nhấp vào link deploy
  -2.Nhập username và password tùy ý
    -2.1  Nếu không nhập username hay password hệ thống sẽ trả về lỗi 400
         và nhảy ra thông báo "Username and password must be provided"
    -2.2  Do em hardcode phần headers trả về từ Authorization là "Bearer"
         nên em chưa kiểm chứng được lỗi 401 với lại em để thời hạn là
         30day nên là em cũng chưa biết khi token hết hạn sẽ như nào
    -2.3  Khi nhập đầy đủ username và password qua phương thức post/login
         sẽ tạo token từ đây có phần payload là id,username id em fake
         là thứ ngày theo thời gian thực....tạo token rồi res về mes là
         "user created" đồng thời cũng đã lưu token vào localstorage của
         client để xử lí tiếp
  -3.Nhìn xuống dưới có thể thấy nút #Get #Data
    -3.1  Khi người dùng nhấp vào đây sẽ điều hướng đển route /dashboard
         lúc này đòng thời sẽ gửi req.headers tên là Autherization 
         có giá trị là "Bearer #token" do em đã hardcode "Bearer" và 
         token được lấy từ localstorage người dùng
    -3.2  Đến lúc này sẻ chạy đến middleware auth để kiểm tra người dùng
         có gửi headers cần thiết không nếu không sẽ quăng ra lỗi 401
         "No token provied" . Nếu hợp lệ không có lỗi sẽ tách để lấy token
         người dùng,nếu thành công sẽ sử dụng phương thức verify để lấy payload
         sau đó lưu lại dữ liệu ở đây là #id và #username và chuyển đến bước tiếp 
         theo vì auth là middleware
    -3.3  Khi này sẽ đẩy đến một middleware khác để xứ lí lấy được dữ liệu từ payload
         trước đó và in ra thông điệp 

## Công nghệ sử dụng

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- dotenv  
         
         
          
