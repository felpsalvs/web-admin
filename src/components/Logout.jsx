import { useTheme, Button, Box } from "@mui/material"
import { tokens } from "../theme"

const Logout = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box mt="90px" p={3}>
			<Button
				fullWidth
				variant="contained"
				sx={{
					backgroundColor: colors.grey[400],
					color: colors.black[500],
					fontWeight: '600',
					height: '48px',
					"&:hover": {
						backgroundColor: colors.grey[300],
					},
				}}
			>
				LOGOUT
			</Button>
		</Box>
	)
}

export default Logout
