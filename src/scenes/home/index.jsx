import {
	Box,
	Typography,
	Button,
	TextField,
	useTheme,
	Link,
	Chip,
} from "@mui/material"
import { tokens } from "../../theme"
import Header from "../../components/Header"
import SearchIcon from "@mui/icons-material/Search"
import AddIcon from "@mui/icons-material/Add"

const Home = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box m="20px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="Hey Felipe, welcome to Pactto!" variant="2" />
			</Box>

			<Box mb="20px">
				<Box display="flex" alignItems="center" mb="10px">
					<Chip label="DONE" color="secondary" />
					<Typography variant="body1" ml="10px">
						Open your inbox and verify your email
					</Typography>
				</Box>

				<Box display="flex" alignItems="center" mb="10px">
					<Chip label="DONE" color="secondary" />
					<Typography variant="body1" ml="10px">
						Check the{" "}
						<Link
							href="https://www.youtube.com/watch?v=CvbvDGsZsKM&t=93s"
							color="secondary"
							underline="always"
						>
							short video of Pactto in action
						</Link>
					</Typography>
				</Box>

				<Box display="flex" alignItems="center" mb="10px">
					<Chip label="DONE" color="secondary" />
					<Typography variant="body1" ml="10px">
						Wanna record your computer screen or review files? Download Pactto
						for{" "}
						<Link
							href="https://pactto.com/#download"
							color="secondary"
							underline="always"
						>
							Mac
						</Link>{" "}
						or{" "}
						<Link
							href="https://pactto.com/#download"
							color="secondary"
							underline="always"
						>
							Windows
						</Link>
					</Typography>
				</Box>

				<Box display="flex" alignItems="center">
					<Chip label="DONE" color="secondary" />
					<Typography variant="body1" ml="10px">
						Wanna review videos, images or audio files with your phone or
						tablet? Download Pactto for{" "}
						<Link
							href="https://apps.apple.com/us/app/pactto-record-video-feedback/id1662226619"
							color="secondary"
							underline="always"
						>
							iOS
						</Link>{" "}
						or{" "}
						<Link
							href="https://play.google.com/store/apps/details?id=com.pactto.replay"
							color="secondary"
							underline="always"
						>
							Android
						</Link>
					</Typography>
				</Box>
			</Box>

			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				mb="20px"
			>
				<Typography
					variant="h2"
					color={colors.grey[100]}
					fontWeight="bold"
					sx={{ mb: "5px" }}
				>
					My uploads
				</Typography>
				<Button
					variant="contained"
					color="secondary"
					sx={{ fontWeight: "bold" }}
					startIcon={<AddIcon />}
				>
					Upload New Video
				</Button>
			</Box>

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

export default Home
