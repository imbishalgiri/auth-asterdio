import { Avatar, Box } from "@chakra-ui/react";
import { User } from "../types/types";

type IUserInfo<t, i> = {
  user: t;
  image?: i;
};

const UserInfo = ({ user, image }: IUserInfo<User | undefined, string>) => {
  console.log();
  return (
    <Box>
      <Box> Full Name: {`${user?.firstName} ${user?.lastName}`}</Box>
      <Box> Email: {user?.email}</Box>
      <Box> Password: {user?.password}</Box>
      <Box>Image: </Box>
      <Avatar size="lg" name={user?.firstName} src={image} />
      <br />
      <Box>
        <Box>Things I would do if i had more time.</Box>
        <ul>
          <li>Break Input Field into custom component.</li>
          <li>
            would ask questions regarding requirements, like which field is
            mandatory and which is not
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default UserInfo;
