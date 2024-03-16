import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";
import ManageUsersTable from "../ManageUsersTable/ManageUsersTable";
import "./ManageUserTabs.scss";
import RolesAndRights from "../RolesAndRightsTab/RolesAndRightsTable/RolesAndRightsTable";
import "../../../sass/common.scss"

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Manage Users`,
    children: <ManageUsersTable />,
  },
  {
    key: "2",
    label: `Roles & Rights`,
    children: <RolesAndRights />,
  },
];

const ManageUserTabs = () => (
  <Card className="manage-user-tabs-cards" >
    <Tabs
      className="custom-tabs-wrapper-style"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  </Card>
);

export default ManageUserTabs;
