import { Box, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import Header from "../../components/Header"

const Review = () => {
	return (
		<Box m="20px">
			<Header title="There are no review requests sent to you" />
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

export default Review
