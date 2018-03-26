import React, { Component } from 'react';
import { Layout, UserManagementModal, PageTitle, ButtonModal, Constant, UMAddModal } from '../components';

class UserManagement extends Component {
  // [GET] - Users
  users = userData();

  render() {
    return (
      <Layout title="การจัดการบัญชีผู้ใช้">
        <div className="container">
          <PageTitle title="การจัดการบัญชีผู้ใช้" />
          <div className="row overall-table">
            <table className="table">
              <thead>
                <tr className="tools-row">
                  <th scope="col"><input className="form-control search" type="text" placeholder="ค้นหา..." /></th>
                  <th scope="col" className="hide1" />
                  <th scope="col" className="hide2" />
                  <th scope="col" />
                  <th scope="col" />
                  <th scope="col" >
                    <ButtonModal color={Constant.Blue} width={Constant.Buttons.default} modalName="#add-user">
                      <i className="fa fa-plus" aria-hidden="true" />
                      <UMAddModal title="สร้างผู้ใช้ใหม่" type="add-user" />
                    </ButtonModal>
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="hide1">ชื่อ - นามสกุล</th>
                  <th scope="col">ชื่อเล่น</th>
                  <th scope="col">ID</th>
                  <th scope="col" className="hide2">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.users.map(user => (
                  <tr key={user.id}>
                    <td className="hide1">{user.firstname} {user.lastname}</td>
                    <td>{user.nickname}</td>
                    <td>{user.username}</td>
                    <td className="hide2">{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <ButtonModal color={Constant.Orange} width={Constant.Buttons.default} modalName={`#edit-user-${user.id}`}>
                        <i className="fa fa-pencil" aria-hidden="true" />
                        <UserManagementModal key={user.id} title="ข้อมูลผู้ใช้งาน" type={`edit-user-${user.id}`} userData={user} />
                      </ButtonModal>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
        <style jsx>{`
          .search{
            background-color: #e9ecef;
          }
          .tools-row{
            height:80px;
            th{
              border-top: none;
            }
          }
          .overall-table{
            margin-top:0px;
            th{
              height:70px;
              text-align:center;
              vertical-align: middle;
            }
            td{
              text-align:center;
              vertical-align: middle;
            }
          }
          @media (max-width: 992px) { 
            .hide1{
              display:none;
            }
          }
          @media (max-width: 768px) { 
            .hide2{
              display:none;
            }
          }
        `}
        </style>
      </Layout>
    );
  }
}

function userData() {
  const users = [
    {
      id: 1,
      firstname: 'Archer',
      lastname: 'Traher',
      email: 'atraher0@google.it',
      nickname: 'Yellow',
      username: 'atraher0',
      password: '0K7d35r',
      tel: '941-715-4509',
      role: 'Owner',
    },
    {
      id: 2,
      firstname: 'Sherilyn',
      lastname: 'Wooding',
      email: 'swooding1@live.com',
      nickname: 'Khaki',
      username: 'swooding1',
      password: 'W6wSVjGDVV',
      tel: '589-802-3451',
      role: 'Owner',
    },
    {
      id: 3,
      firstname: 'Erminie',
      lastname: 'Georgiades',
      email: 'egeorgiades2@diigo.com',
      nickname: 'Blue',
      username: 'egeorgiades2',
      password: 'GdKAPoubYOIV',
      tel: '177-268-9690',
      role: 'Owner',
    },
    {
      id: 4,
      firstname: 'Dominik',
      lastname: 'Switsur',
      email: 'dswitsur3@wired.com',
      nickname: 'Pink',
      username: 'dswitsur3',
      password: 'If6DgzXJPxg',
      tel: '625-877-1952',
      role: 'Admin',
    },
    {
      id: 5,
      firstname: 'Sharleen',
      lastname: 'Bostick',
      email: 'sbostick4@github.io',
      nickname: 'Fuscia',
      username: 'sbostick4',
      password: 'UaXVPi',
      tel: '892-646-7110',
      role: 'Admin',
    },
    {
      id: 6,
      firstname: 'Ford',
      lastname: 'Chasier',
      email: 'fchasier5@phoca.cz',
      nickname: 'Aquamarine',
      username: 'fchasier5',
      password: 'mCLrLR',
      tel: '179-637-9279',
      role: 'Admin',
    },
    {
      id: 7,
      firstname: 'Maia',
      lastname: 'Spurett',
      email: 'mspurett6@joomla.org',
      nickname: 'Teal',
      username: 'mspurett6',
      password: 'bMgyzA',
      tel: '904-911-4607',
      role: 'Admin',
    },
    {
      id: 8,
      firstname: 'Simona',
      lastname: 'Acres',
      email: 'sacres7@rambler.ru',
      nickname: 'Orange',
      username: 'sacres7',
      password: 'WG7DpIKKWm',
      tel: '907-273-8871',
      role: 'Admin',
    },
    {
      id: 9,
      firstname: 'Aaron',
      lastname: 'Crossingham',
      email: 'acrossingham8@163.com',
      nickname: 'Fuscia',
      username: 'acrossingham8',
      password: '7k0mnsvvdo',
      tel: '381-990-2820',
      role: 'Staff',
    },
    {
      id: 10,
      firstname: 'Niel',
      lastname: 'Voelker',
      email: 'nvoelker9@rakuten.co.jp',
      nickname: 'Crimson',
      username: 'nvoelker9',
      password: '6DJdjBzcSWO',
      tel: '767-174-0948',
      role: 'Staff',
    },
    {
      id: 11,
      firstname: 'Kattie',
      lastname: 'Loding',
      email: 'klodinga@tinyurl.com',
      nickname: 'Pink',
      username: 'klodinga',
      password: '6OdrWq',
      tel: '949-345-2637',
      role: 'Staff',
    },
    {
      id: 12,
      firstname: 'Inesita',
      lastname: 'Cardenosa',
      email: 'icardenosab@behance.net',
      nickname: 'Turquoise',
      username: 'icardenosab',
      password: '3k4I81',
      tel: '685-631-6326',
      role: 'Staff',
    },
    {
      id: 13,
      firstname: 'Josey',
      lastname: 'Laffan',
      email: 'jlaffanc@tumblr.com',
      nickname: 'Maroon',
      username: 'jlaffanc',
      password: 'tO1psUtvrJ75',
      tel: '503-798-6012',
      role: 'Staff',
    },
    {
      id: 14,
      firstname: 'Jacquie',
      lastname: 'Joddens',
      email: 'jjoddensd@weebly.com',
      nickname: 'Aquamarine',
      username: 'jjoddensd',
      password: 'E5Pg0YK3o',
      tel: '231-377-0643',
      role: 'Staff',
    },
    {
      id: 15,
      firstname: 'Dasha',
      lastname: 'Wallach',
      email: 'dwallache@adobe.com',
      nickname: 'Pink',
      username: 'dwallache',
      password: '7K9YCLvfg',
      tel: '749-427-3016',
      role: 'Staff',
    },
    {
      id: 16,
      firstname: 'Dilly',
      lastname: 'Friel',
      email: 'dfrielf@4shared.com',
      nickname: 'Purple',
      username: 'dfrielf',
      password: 'qUsll76q',
      tel: '245-833-9031',
      role: 'Staff',
    },
    {
      id: 17,
      firstname: 'Hube',
      lastname: 'Ferby',
      email: 'hferbyg@yellowbook.com',
      nickname: 'Puce',
      username: 'hferbyg',
      password: 'dpveGeW',
      tel: '924-664-2494',
      role: 'Staff',
    },
    {
      id: 18,
      firstname: 'Matty',
      lastname: 'Balffye',
      email: 'mbalffyeh@youku.com',
      nickname: 'Khaki',
      username: 'mbalffyeh',
      password: 'DFe2l7gNuQd',
      tel: '581-289-9479',
      role: 'Staff',
    },
    {
      id: 19,
      firstname: 'Pauletta',
      lastname: 'Tredwell',
      email: 'ptredwelli@go.com',
      nickname: 'Yellow',
      username: 'ptredwelli',
      password: 'gdtN3K3Z1Y',
      tel: '706-939-3714',
      role: 'Staff',
    },
    {
      id: 20,
      firstname: 'Merl',
      lastname: 'Covill',
      email: 'mcovillj@phpbb.com',
      nickname: 'Mauv',
      username: 'mcovillj',
      password: '4tqEBgrQOHW5',
      tel: '362-776-0322',
      role: 'Admin',
    },
    {
      id: 21,
      firstname: 'Cissy',
      lastname: 'Giannassi',
      email: 'cgiannassik@ihg.com',
      nickname: 'Mauv',
      username: 'cgiannassik',
      password: 'rH66WF',
      tel: '401-931-1732',
      role: 'Admin',
    },
    {
      id: 22,
      firstname: 'Coreen',
      lastname: 'Broggini',
      email: 'cbrogginil@netlog.com',
      nickname: 'Crimson',
      username: 'cbrogginil',
      password: '8A9W9T',
      tel: '390-595-8578',
      role: 'Staff',
    },
    {
      id: 23,
      firstname: 'Brear',
      lastname: 'Totterdell',
      email: 'btotterdellm@imdb.com',
      nickname: 'Blue',
      username: 'btotterdellm',
      password: 'HXCUFfgcr0sb',
      tel: '135-536-0887',
      role: 'Staff',
    },
    {
      id: 24,
      firstname: 'Yurik',
      lastname: 'Minguet',
      email: 'yminguetn@sbwire.com',
      nickname: 'Puce',
      username: 'yminguetn',
      password: 'TJ45Nhl1zQ',
      tel: '809-302-5417',
      role: 'Admin',
    },
    {
      id: 25,
      firstname: 'Woodrow',
      lastname: 'Oliva',
      email: 'wolivao@google.com.au',
      nickname: 'Puce',
      username: 'wolivao',
      password: '4Cqmw6fbH',
      tel: '243-620-0007',
      role: 'Admin',
    },
    {
      id: 26,
      firstname: 'Merrie',
      lastname: 'Gerard',
      email: 'mgerardp@furl.net',
      nickname: 'Red',
      username: 'mgerardp',
      password: 'UC5sS7X9J',
      tel: '371-310-6673',
      role: 'Admin',
    },
  ];
  return users;
}

export default UserManagement;
