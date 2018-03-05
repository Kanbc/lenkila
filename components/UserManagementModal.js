import React from 'react';

const UserManagementModal = ({ activeId, title }) => (
  <div className="modal fade" id={activeId} tabIndex="-1" role="dialog" aria-labelledby="lenkilaModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="lenkilaModalLongTitle">{ title }</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form>
          <div className="modal-body">
            <div className="row">
              <div className="col-1">
                <p>ชื่อ</p>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" id="firstname" />
              </div>
              <div className="col-2">
                <p>นามสกุล</p>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" id="lastname" />
              </div>
              <div className="col-1">
                <p>ชื่อเล่น</p>
              </div>
              <div className="col-2">
                <input type="text" className="form-control" id="nickname" />
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <p>ID</p>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" id="user-id" />
              </div>
              <div className="col-2">
                <p>Password</p>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" id="password" />
              </div>
              <div className="col-1" />
              <div className="col-2" />
            </div>
            <div className="row">
              <div className="col-1">
                <p>Email</p>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="col-2">
                <p>เบอร์โทร</p>
              </div>
              <div className="col-3">
                <input type="text" className="form-control" id="tel" />
              </div>
              <div className="col-1">
                <p>Role</p>
              </div>
              <div className="col-2">
                <select className="form-control" id="role">
                  <option>Owner</option>
                  <option>Admin</option>
                  <option>Staff</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <p>โน้ต</p>
              </div>
              <div className="col-11">
                <textarea className="form-control" id="note" rows="3" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success">สร้าง</button>
            <button type="button" className="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
          </div>
        </form>
      </div>
    </div>
    <style jsx>{`
      .modal-header{
        border-bottom:none;
      }
      .modal-body{
        padding-left:60px;
        padding-right:60px;
      }
      .modal-body p{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        text-align: center;
      }
      .modal-body .row{
        margin-top:10px;
        margin-bottom:40px;
      }
      .modal-footer button{
        width:100px;
      }
      .modal-footer{
        justify-content: center;
        padding-top:0px;
        padding-bottom:40px;
        border-top:none;
      }
      .modal-footer>:not(:last-child){
        margin-right: 2rem;
      }
      .modal-footer>:not(:first-child){
        margin-left: 2rem;
      }
      .modal-header .close {
        margin:-1rem -1rem -1rem -1rem;
      }
      .modal-dialog{
        max-width:70%;
      }
      .modal-title{
        margin-left:auto;
        margin-right:auto;
        font-weight:900;
        font-size: 1.5rem;
      }
    `}
    </style>
  </div>
);

export default UserManagementModal;
