import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import orderService from '../../services/oderService'

function HotelSidebar({hotel}) {
    const handleOrder = async (data) => { 
    var FormData = require('form-data');
    const oderData = new FormData();
    oderData.append('nameCustomer', data.name);
    oderData.append('email', data.email);
    oderData.append('phone', data.phone);
    oderData.append('note', data.note);
    oderData.append('nameHotel', data.nameHotel);
    await orderService.createHotelService(oderData);     
    }
    const formik = useFormik({
        initialValues:{
          name: '',
          email: localStorage.getItem("user")?localStorage.getItem("user"):"",
          phone:'',
          note:'',
        },
        validationSchema:Yup.object({
          name: Yup.string()
          .max(100,"Yêu cầu nhập đúng dữ liệu")
          .required('Vui lòng nhập tên'),
          email: Yup.string()
          .max(100,"Yêu cầu nhập đúng dữ liệu")
          .required('Vui lòng nhập email')
          .email('Email sai định dạng'),
          phone: Yup.string()
          .required("Vui lòng nhập số điện thoại")
          .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Số điện thoại không đúng.Vui lòng nhập lại"
          ),
          note: Yup.string()
          .required("Vui lòng nhập ghi chú")

        }),
        onSubmit: (values,{ resetForm }) =>{
            console.log({...values,"nameHotel":hotel.name});
            try {
                handleOrder({...values,"nameHotel":hotel.name});
                document.getElementById("model-success").style.display='block';
                var action = setTimeout(function(){
                    document.getElementById("model-success").style.display='none';
                }, 3000);
                clearTimeout(action);
                  
                resetForm();
            }catch(e) {
                console.log("fail"+e);
            }
        },
      });
 

    return (
        <div className="tour-sidebar">
            <div className="tour-sidebar__search tour-sidebar__single"id="book-tour-form">
                <input type="hidden" id="hdBookTourID" defaultValue={5} />
                <input type="hidden" id="hdBookLang" defaultValue="vi" />
                <h3>Đặt khách sạn này</h3>
                <form onSubmit={formik.handleSubmit}  className="tour-sidebar__search-form">
                <div className="input-group">
                    <input type="text" id="name" placeholder="Họ và tên" 
                         {...formik.getFieldProps("name")}
                    />
                </div>
                
                <div className="input-group"><span className="text-center text-danger">{formik.touched.name&&formik.errors?.name}</span></div>
                <div className="input-group">
                    <input type="email" id="email" placeholder="Email" 
                         {...formik.getFieldProps("email")}
                    />
                </div>
                
                <div className="input-group"><span className="text-center text-danger">{formik.touched.email&&formik.errors?.email}</span></div>  
                <div className="input-group">
                    <input type="text" id="phone" placeholder="Điện thoại" 
                         {...formik.getFieldProps("phone")}
                    />
                </div>
                <div className="input-group"><span className="text-center text-danger">{formik.touched.phone&&formik.errors?.phone}</span></div>
                <div className="input-group">
                    <textarea id="note" placeholder="Ghi chú" defaultValue={""} 
                        {...formik.getFieldProps("note")}
                    />
                <div className="input-group"><span className="text-center text-danger">{formik.touched.note&&formik.errors?.note}</span></div>
                </div>
                <span className="text-center text-danger"></span>

                <div className="input-group">
                    <button type="submit" className="thm-btn">Đặt</button>
                </div>
                </form>
            </div>
            {/* <div className="tour-sidebar">
                <div className="tour-sidebar__featured">
                    <h3>Địa điểm khác</h3>
                    <div className="tour-sidebar__featured-single"><img src={anh2} alt="" />
                        <span>Phường Nông Trang</span>
                        <h3><a href="/vi/restaurant/details/nha-hang-ha-ca-tien-vua-5">Nhà hàng hả cá Tiến Vua</a></h3>
                    </div>
                    <div className="tour-sidebar__featured-single">
                        <img src={anh2} alt="" />
                        <span>Phường Nông Trang</span>
                        <h3><a href="/vi/restaurant/details/nha-hang-vy-anh-6">Nhà hàng Vy Anh</a></h3>
                    </div>
                    <div className="tour-sidebar__featured-single">
                    <img src={anh2} alt="" />
                    <span>Phường Nông Trang</span>
                    <h3><a href="/vi/restaurant/details/kichi-kichi-lau-bang-chuyen-viet-tri-12">Kichi Kichi - lẩu băng chuyền Việt Trì</a></h3>
                    </div>
                </div>
            </div> */}
        </div>
        
    )
}

export default HotelSidebar

