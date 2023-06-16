import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {
  LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart
} from "react-native-chart-kit";
const windowWidth = Dimensions.get('window').width;
import { ICON, COLOR } from '../constants/Themes'
import { AppContext } from '../utils/AppContext';
import { useContext, useEffect } from 'react';
import AxiosInstance from '../constants/AxiosInstance';
const ItemYear = () => {
  const { idUser, infoUser, currentDay } = useContext(AppContext);
  const [transactionsJan, settransactionsJan] = useState([]);
  const [transactionsFer, settransactionsFer] = useState([]);
  const [transactionsMar, settransactionsMar] = useState([]);
  const [transactionsApr, settransactionsApr] = useState([]);
  const [transactionsMay, settransactionsMay] = useState([]);
  const [transactionsJun, settransactionsJun] = useState([]);
  const [transactionsJul, settransactionsJul] = useState([]);
  const [transactionsAug, settransactionsAug] = useState([]);
  const [transactionsSep, settransactionsSep] = useState([]);
  const [transactionsOct, settransactionsOct] = useState([]);
  const [transactionsNov, settransactionsNov] = useState([]);
  const [transactionsDec, settransactionsDec] = useState([]);
  const currentYear = new Date().getFullYear();
  const getTotalMoneyByYear = async () => {
    try {
      const response = await AxiosInstance().get("/transaction/api/search-by-year?idUser=" + idUser + "&year=" + currentYear);
      if (response.result) {
        // console.log(response.transaction[1].transactionsFer,"aaaaaaaaaa111");
        settransactionsJan(response.transaction[0].transactionsJan);
        settransactionsFer(response.transaction[1].transactionsFer);
        settransactionsMar(response.transaction[2].transactionsMar);
        settransactionsApr(response.transaction[3].transactionsApr);
        settransactionsMay(response.transaction[4].transactionsMay);
        settransactionsJun(response.transaction[5].transactionsJun);
        settransactionsJul(response.transaction[6].transactionsJul);
        settransactionsAug(response.transaction[7].transactionsAug);
        settransactionsSep(response.transaction[8].transactionsSep);
        settransactionsOct(response.transaction[9].transactionsOct);
        settransactionsNov(response.transaction[10].transactionsNov);
        settransactionsDec(response.transaction[11].transactionsDec);
      } else {
        console.log('FAILED TO GET TOTAL',);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function getTotalMoney(transactions) {
    let totalMoney = 0;
    for (let i = 0; i < transactions.length; i++) {
      totalMoney += transactions[i].money;
    }
    return totalMoney;
  }
  useEffect(() => {
    getTotalMoneyByYear();
    return () => {

    }
  }, [])
  function getTotalMoney(transactions) {
    let totalMoney = 0;
    for (let i = 0; i < transactions.length; i++) {
      totalMoney += transactions[i].money;
    }
    return totalMoney;
  }
  let totalMoneyJan = getTotalMoney(transactionsJan);
  let totalMoneyFer = getTotalMoney(transactionsFer);
  let totalMoneyMar = getTotalMoney(transactionsMar);
  let totalMoneyApr = getTotalMoney(transactionsApr);
  let totalMoneyMay = getTotalMoney(transactionsMay);
  let totalMoneyJun = getTotalMoney(transactionsJun);
  let totalMoneyJul = getTotalMoney(transactionsJul);
  let totalMoneyAug = getTotalMoney(transactionsAug);
  let totalMoneySep = getTotalMoney(transactionsSep);
  let totalMoneyOct = getTotalMoney(transactionsOct);
  let totalMoneyNov = getTotalMoney(transactionsNov);
  let totalMoneyDec = getTotalMoney(transactionsDec);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boxMonth}>
        <Image style={styles.icon} source={require('../asset/icon/icon_calender.png')} />
        <Text style={styles.textMonthYear}>2023</Text>
      </TouchableOpacity>
      <View style={{ height: 40 }}>
        <Text> selected entry</Text>
        <Text style={styles.infoMonth}></Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text>Thống Kê Thu</Text>
          <LineChart
            data={{
              labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
              datasets: [
                {
                  data: [
                    totalMoneyJan,
                    totalMoneyFer,
                    totalMoneyMar,
                    totalMoneyApr,
                    totalMoneyMay,
                    totalMoneyJun,
                    totalMoneyJul,
                    totalMoneyAug,
                    totalMoneySep,
                    totalMoneyOct,
                    totalMoneyNov,
                    totalMoneyDec,
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "red",
              backgroundGradientTo: "black",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
        <View style={styles.container}>
          <Text>Thống Kê Chi</Text>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "blue",
              backgroundGradientTo: "black",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </ScrollView>
    </View>

  )
}

export default ItemYear

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginBottom: 40,
  },
  chart: {
    flex: 1
  },
  infoMonth: {
    fontWeight: '500',
    color: COLOR.black,

  }, boxMonth: {
    height: 40,
    width: windowWidth,
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