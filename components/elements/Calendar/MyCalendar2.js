// import React, { Component, PropTypes } from 'react';
// import Timeline from 'react-calendar-timeline/lib';
// import {
//   Grid,
//   Col,
//   Row,
//   FormGroup,
//   FormControl,
//   Glyphicon,
//   InputGroup,
//   Button,
//   Modal
// } 
//   from 'react-bootstrap';
// import moment from 'moment';
// import Icon from 'react-icons-kit';
// import { cog } from 'react-icons-kit/fa/cog';

// import generateFakeData from './fake-data';

// var minTime = moment()
//   .add(-6, "months")
//   .valueOf();
// var maxTime = moment()
//   .add(6, "months")
//   .valueOf();

// var keys = {
//   groupIdKey: "id",
//   groupTitleKey: "title",
//   groupRightTitleKey: "rightTitle",
//   itemIdKey: "id",
//   itemTitleKey: "title",
//   itemDivTitleKey: "title",
//   itemGroupKey: "group",
//   itemTimeStartKey: "start",
//   itemTimeEndKey: "end"
// };

// class Trigger extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { show: props.modal };
//   }
//   // componentWillReceiveProps(nextProps) {
//   //   if (this.state.show !== nextProps.modal) {
//   //     this.setState({ show: nextProps.modal });
//   //   }
//   // }
//   render() {
//     // let close = () => this.setState({ show: false });
//     const {modal, onClose} = this.props
//     return (
//       <div className="modal-container">
//         <Modal
//           show={modal}
//           onHide={onClose}
//           container={this}
//           aria-labelledby="contained-modal-title"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title">This is modal</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <p> Pass test data </p>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={close}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default class Booking extends React.PureComponent {
//   // eslint-disable-line react/prefer-stateless-function

//   constructor(props) {
//     super(props);

//     const { groups, items } = generateFakeData();
//     const defaultTimeStart = moment()
//       .startOf("day")
//       .toDate();
//     const defaultTimeEnd = moment()
//       .startOf("day")
//       .add(1, "day")
//       .toDate();

//     this.state = {
//       groups,
//       items,
//       defaultTimeStart,
//       defaultTimeEnd,
//       startDate: moment(),
//       show: false
//     };
//   }

//   handleChange = date => {
//     this.setState({
//       startDate: date
//     });
//     console.log(date.format("DD.MM.YYYY"));
//   };

//   // Calendar methods
//   handleCanvasClick = (groupId, time, event) => {
//     window.alert(`Canvas clicked ${groupId} ${time}`);
//   };

//   handleCanvasContextMenu = (group, time, e) => {
//     console.log("Canvas context menu", group, time);
//   };

//   handleItemContextMenu = itemId => {
//     console.log("Context Menu: " + itemId);
//   };

//   handleItemResize = (itemId, time, edge) => {
//     const { items } = this.state;

//     this.setState({
//       items: items.map(
//         item =>
//           item.id === itemId
//             ? Object.assign({}, item, {
//                 start: edge === "left" ? time : item.start,
//                 end: edge === "left" ? item.end : time
//               })
//             : item
//       )
//     });

//     console.log("Resized", itemId, time, edge);
//   };

//   handleItemClick = itemId => {
//     console.log("Clicked: " + itemId);
//     this.setState({
//       show: true
//     });
//   };

//   handleItemSelect = itemId => {
//     console.log("Selected: " + itemId);
//   };

//   handleItemMove = (itemId, dragTime, newGroupOrder) => {
//     const { items, groups } = this.state;

//     const group = groups[newGroupOrder];

//     this.setState({
//       items: items.map(
//         item =>
//           item.id === itemId
//             ? Object.assign({}, item, {
//                 start: dragTime,
//                 end: dragTime + (item.end - item.start),
//                 group: group.id
//               })
//             : item
//       )
//     });

//     console.log("Moved", itemId, dragTime, newGroupOrder);
//   };

//   moveResizeValidator = (action, item, time, resizeEdge) => {
//     if (time < new Date().getTime()) {
//       var newTime =
//         Math.ceil(new Date().getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000);
//       return newTime;
//     }

//     return time;
//   };

//   handleClick = () => {
//     console.log("you clicked");
//     defaultTimeStart = moment(this.defaultTimeStart).add(12, "hour");
//     defaultTimeEnd = moment(this.defaultTimeEnd).add(12, "hour");
//     handleTimeChange(defaultTimeStart, defaultTimeEnd);
//   };

//   handleTimeChange = (visibleTimeStart, visibleTimeEnd) => {
//     console.log(visibleTimeStart, visibleTimeEnd);
//     defaultTimeStart = visibleTimeStart;
//     defaultTimeEnd = visibleTimeEnd;
//     this.updateScrollCanvas(defaultTimeStart, defaultTimeEnd);
//   };

//   zoomIn(e) {
//     e.preventDefault();
//     console.log("zoomin clicked");
//     this.changeZoom(0.75);
//   }

//   zoomOut(e) {
//     e.preventDefault();

//     this.changeZoom(1.25);
//   }

//   itemRenderer = ({ item }) => {
//     return (
//       <div className="reservation">
//         <div className="reservation__shift">
//           <span className="reservation__title">{item.title}</span>
//           <span className="task__shift__time">
//             klo {moment(item.start).format("HH:MM")} -{" "}
//             {moment(item.end).format("HH:MM")}
//           </span>
//         </div>
//         <div className="task__settings">
//           <span className="task__settings__icon">
//             <Icon
//               size={30}
//               icon={cog}
//               data-id={item.id}
//               data-taskname={item.title}
//               onClick={() => this.setState({ show: true })}
//             />
//           </span>
//         </div>
//       </div>
//     );
//   };

//   render() {
//     let close = () => this.setState({ show: false });

//     const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;
//     return (
//       <Grid fluid>
//         <Trigger modal={this.state.show} onClose={() => this.setState({show: false})}/>

//         <Row>
//           <Col lg={12} md={12}>
//             <Timeline
//               className=""
//               sidebarContent={
//                 <div className="reservation__label">Reservation</div>
//               }
//               groups={groups}
//               items={items}
//               keys={keys}
//               ref={r => {
//                 this.timeline = r;
//               }}
//               fullUpdate
//               canMove
//               fixedHeader="sticky"
//               canSelect
//               itemHeightRatio={0.7}
//               showCursorLine
//               minResizeWidth={80}
//               defaultTimeStart={moment(new Date())}
//               defaultTimeEnd={moment().add(12, "hour")}
//               onItemClick={this.handleItemClick}
//               onItemMove={this.handleItemMove}
//               minZoom={60 * 60 * 1000}
//               onCanvasClick={this.handleCanvasClick}
//               onCanvasContextMenu={this.handleCanvasContextMenu}
//               onItemContextMenu={this.handleItemContextMenu}
//               onItemResize={this.handleItemResize}
//               moveResizeValidator={this.moveResizeValidator}
//               itemRenderer={this.itemRenderer}
//               lineHeight={45}
//               zoom
//             />
//           </Col>
//         </Row>
//       </Grid>
//     );
//   }
// }
