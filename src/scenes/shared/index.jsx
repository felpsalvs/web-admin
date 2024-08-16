import { Box, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import Header from "../../components/Header"

const Shared = () => {
	return (
		<Box m="20px">
			<Header title="There are no public web links you created" />
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				mb="80px"
			>
				<TextField
					fullWidth
					variant="outlined"
					placeholder="Search"
					InputProps={{
						endAdornment: <SearchIcon />,
					}}
				/>
			</Box>
			<Header title="There are no private web links you created" />
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				mt="20px"
			>
				<TextField
					fullWidth
					variant="outlined"
					placeholder="Search"
					InputProps={{
						endAdornment: <SearchIcon />,
					}}
				/>
			</Box>
		</Box>
	)
}

export default Shared
