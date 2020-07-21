import React from "react";
import { StyleSheet, Image, TouchableOpacity,View } from "react-native";
import { COLORS, ICONS_LIGHT } from "../../styles";
import { CustomText } from "../../commons/CustomText";
import { selectTheme } from "../../redux/theme";
import { connect } from "react-redux";
import { Spinner } from "@ui-kitten/components";

const mapStateToProps = (state) => ({
  darkMode: selectTheme(state),
});
const DATA = new Array(8).fill({});

export const UserCard = connect(
  mapStateToProps,
  {}
)(({ user, onPress, darkMode }) => {
  const colorTheme = darkMode
    ? {
        backgroundColor: COLORS.backgroundDark,
        userColor: COLORS.sendDark,
        nameColor: COLORS.backgroundLight,
      }
    : {
        backgroundColor: COLORS.backgroundLight,
        userColor: COLORS.drawerLight,
        nameColor: COLORS.acsentLight,
      };
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setTimeout(loadData, 1000);
  }, []);

  const loadData = () => {
    setData(DATA);
  };
  renderData = () =>{
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={
          user.profilePiC ? { uri: user.profilePiC } : ICONS_LIGHT.userLight
        }
        style={styles.image}
      />
      <CustomText
        numberOfLines={1}
        style={{ ...styles.userName, color: colorTheme.userColor }}
      >
        @{user.userName}
      </CustomText>
      <CustomText
        numberOfLines={2}
        style={{ ...styles.name, color: colorTheme.nameColor }}
      >
        {user.name}
      </CustomText>
    </TouchableOpacity>
  )};
  renderLoading = () => {
    return (
      <View style={styles.loading}>
        <Spinner />
      </View>
    );
  };
  return data.length > 0 ? renderData() : renderLoading();
});
const styles = StyleSheet.create({
  card: {
    width: 70,
    height: "100%",
    alignItems: "center",
    // justifyContent:'space-around',
    marginRight: 10,
    overflow: "hidden",
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: COLORS.commentsColorLight,
  },
  userName: {
    fontSize: 9,
    marginTop: 5,
  },
  name: {
    fontSize: 13,
    textAlign: "center",
  },
  loading: {
	flex: 1,
    justifyContent: "center",
    alignItems: "center",
	  marginRight:50
  }
});
