import React from 'react';

const Header = ({ title,changeAddmore,changeCurrentModal,setDataBooking,clearCheckData,type,setDataPrice }) => (
  <div className="modal-header">
    <h5 className="modal-title" id="lenkilaModalLongTitle">{ title }</h5>
    {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>
      {
        setDataBooking({
          checkPriceData:[],
          paramsCheckprice:[],
          paramsFieldDocList:[],
          editFieldDocList:[],
          editAddmore:false
        })
        changeAddmore(false)
        changeCurrentModal('#add-drag-booking')
        clearCheckData()
      }
      }>
      <span aria-hidden="true">&times;</span>
    </button> */}
    <button type="button" className="close" onClick={()=>
      {
        setDataBooking({
          checkPriceData:[],
          paramsCheckprice:[],
          paramsFieldDocList:[],
          editFieldDocList:[],
          editAddmore:false
        })
        changeAddmore(false)
        changeCurrentModal('#add-drag-booking')
        clearCheckData()
        setDataPrice({fieldIdImport:0})
        $("#" + type).modal('hide');
      }
      }>
      <span aria-hidden="true">&times;</span>
    </button>
    <style jsx>{`
      .modal-header{
        border-bottom:none;
        .close {
          margin:-1rem -1rem -1rem -1rem;
        } 
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

export default Header;
