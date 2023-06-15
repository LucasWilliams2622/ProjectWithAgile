import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import MonthPicker from 'react-native-month-year-picker';
import { ICON, COLOR } from '../constants/Themes';
import AxiosInstance from '../constants/AxiosInstance';
import { AppContext } from '../utils/AppContext';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { set } from 'mongoose';

const ItemMonth = (props) => {

  const { navigate } = props;
  const screenWidth = Dimensions.get("window").width;
  const [date, setDate] = useState('');
  const [totalIncome, setTotalIncome] = useState('');
  const [totalExpense, setTotalExpense] = useState('');
  const [totalMoney, setTotalMoney] = useState('');
  const [limit, setLimit] = useState('');
  const { idUser, infoUser, currentDay } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  const data = [
    {
      name: "%  Income",
      population: Math.ceil(totalIncome),
      color: "#A7ECEE",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "%  Expense",
      population: Math.floor(totalExpense),
      color: "#F99B7D",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
      fontSize: 20,
      fontWeight: '900'
    },
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const getTotalMoney = async () => {
    try {
      const response = await AxiosInstance().get("/transaction/api/get-total-money?idUser=" + idUser);
      console.log("Total Money, item money: ", response);
      if (response.result) {
        console.log('cai nay chay r nha');
        // Math.floor(setTotalExpense((response.transaction.totalExpense/(response.transaction.totalExpense + response.transaction.totalIncome))*100));
        // Math.ceil(setTotalIncome((response.transaction.totalIncome/(response.transaction.totalExpense + response.transaction.totalIncome))*100));
        setTotalExpense((response.transaction.totalExpense / (response.transaction.totalExpense + response.transaction.totalIncome)) * 100);
        setTotalIncome((response.transaction.totalIncome / (response.transaction.totalExpense + response.transaction.totalIncome)) * 100);
        //setTotalMoney(response.transaction.totalMoney);
        setIsLoading(false);
      } else {
        console.log('FAILED TO GET TOTAL',);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTotalMoney()
    return () => {

    }
  }, [])

  return (
    <View>
      <TouchableOpacity style={styles.boxMonth}>
        <Image style={styles.icon} source={require('../asset/icon/icon_calender.png')} />
        <Text style={styles.textMonthYear}>Tháng 6, năm 2023</Text>

        {/* <MonthPicker
          modal
          // open={this.state.show}
          value={date}
          maximumDate={new Date(2030, 12)}
          // minimumDate={new Date()}
          locale="vn"
          onConfirm={() => {
            
          }}
          onCancel={() => {
            false
          }}
        /> */}
      </TouchableOpacity>
      {isLoading ? (<View />) : (
        <View >
          <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[5, 0]}
            absolute
          />
        </View>)}

    </View>
  )
}

export default ItemMonth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  boxChart: {
    // borderColor: 'red', borderWidth: 2,
    flex: 1,

  },
  chart: {
    // borderColor: 'red', borderWidth: 2,
    flex: 0.8,


  },
  boxMonth: {
    height: 40,
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: COLOR.white,
    // borderColor: 'red', borderWidth: 2,
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',

  },
  icon: {
    width: 30,
    height: 30,
  },
  textMonthYear: {
    fontWeight: '400',
    fontSize: 17,
    marginHorizontal: 7,
    letterSpacing: 0.3,
    color: COLOR.black,

  }
})