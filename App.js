// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	TextInput,
	StatusBar,
	TouchableOpacity
} from 'react-native';
// import addressBook from './assets/icons/address-book.png';


const formFields = [
	{label: 'School', input: 'The Lawrenceville School', color: 'grey'},
	{label: 'Email Address', input: 'danielrozar@gmail.com', color: 'grey'},
	{label: 'Name', input: 'Daniel Rozar', color: 'blue'},
	{label: 'Nick Name', input: 'r.denial', color: 'blue'},
	{
		label: 'Emergency Contact',
		input: '+1-987654321',
		icon: require('./assets/icons/address-book.png'),
		color: 'blue'
	},
]

const AppButton = ({ onPress, title, buttonStyle, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
);

export default function App() {
	let labelColor

	return (
		<View>
			<StatusBar />
			{/* page nav */}
			<View style={styles.nav}>
				{/* back icon */}
				<Image
					source={require('./assets/icons/left.png')}
					style={[
						styles.icon,
						{
							position: 'absolute',
							left: 15,
							height: 20,
							width: 20
						}
					]}
				/>
				<Text style={styles.title}>Edit Profile</Text>
			</View>
			{/* profile image */}
			<View style={{
				position: 'relative',
				marginVertical: variables.marginH,
				alignSelf: 'center'
			}}>
				<Image
					source={require('./assets/images/dp.jpg')}
					style={styles.profileImage}
				/>
				<View style={{
					position: 'absolute',
					bottom: 5,
					right: 5,
					padding: 7,
					backgroundColor: variables.blue,
					borderRadius: 50,
				}}>
					<Image
						source={require('./assets/icons/camera.png')}
						style={[ styles.icon, {width: 20, height: 20} ]}
					/>
				</View>
			</View>
			{
				formFields.map((field, i) =>
					<View
						style={[
							styles.field,
							field.color === 'blue' ? styles.borderlined : {}
						]}
						key={i}
					>
						<Text
							style={[
								styles.label,
								styles[field.color+'Label']
							]}
						>
							{field.label}
						</Text>
						{/* make room for input field that have icons beside them */}
						<View style={styles.input}>
							<TextInput
								editable
								style={styles.input}
							>
								{field.input}
							</TextInput>
							{
								!field.icon ? null :
								<Image
									source={field.icon}
									style={styles.icon}
								/>
							}
						</View>
					</View>
				)
			}
			{/* update button */}
			<AppButton
				onPress={() => alert('Hello Native')}
				title="Update Profile"
				buttonStyle={styles.btn}
				textStyle={styles.btnText}
			/>
		</View>
	);
}


const variables = {
	dpSize: 150,
	marginH: 50,
	blue: '#27b4e4',
	greyText: '#d3d8da',
	greyLine: '#f0f0f0',
};

const styles = StyleSheet.create({
	icon: {
		width: 25,
		height: 25,
	},

	nav: {
		position: 'relative',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		borderBottomColor: variables.greyLine,
		borderBottomWidth: 3,
		paddingTop: 10,
		paddingBottom: 15,
	},

	title: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		flex: 1,
	},

	profileImage: {
		flex: 0,
		borderRadius: variables.dpSize,
		width: variables.dpSize,
		height: variables.dpSize,
		alignSelf: 'center'
	},

	field: {
		marginHorizontal: variables.marginH,
		marginBottom: 30,
	},

	label: {
		marginBottom: 3,
		fontWeight: "bold",
	},

	'greyLabel': {
		color: variables.greyText,
	},

	'blueLabel': {
		color: variables.blue,
	},

	input: {
		marginBottom: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	borderlined: {
		borderBottomWidth: 1,
		borderBottomColor: variables.greyLine,
	},

	btn: {
		borderRadius: 30,
		backgroundColor: variables.blue,
		paddingVertical: 15,
		marginHorizontal: variables.marginH,
		marginTop: 10,
	},

	btnText: {
		alignSelf: 'center',
		color: '#fff',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 15
	}
});
