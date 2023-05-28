import React, { useState } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';
import { ICON, COLOR } from '../constants/Themes'

import {BarChart} from 'react-native-charts-wrapper';


// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const income = new Array(12).fill(0);
// const expense = new Array(12).fill(0);
// // Chuyền dữ liệu vào mảng income và expense
// income.splice(0, 3, 1000, 2000, 3000); // Tháng 1, 2 3 có thu nhập lần lượt là 1000, 2000, 3000
// expense.splice(2, 4, 500, 1000, 1500, 2000); // Tháng 3, 4, 5, 6 có chi phí lần lượt là 500, 1000, 1500,2000

// const yearData = months.map((month, index) => {
//   console.log(income)
//   return {
//     month: month,
//     income: income[index],
//     expense: expense[index],
  
//   }
// });

const income = [10, 95, 72, 190, 0, 109, 105, 99, 95];

class BarChartScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 14,
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5
      },
      data: {
        dataSets: [{
          values: [{y: 20}, {y: 105}, {y: 102}, {y: 10}, {y: 114}, {y: 10}, {y: 105}, {y: 99}, {y: 95}],
          label: 'Income',
          config: {
            color: processColor('#00C4FF'),
            barShadowColor: processColor('#30A2FF'),
            valueTextSize:12,
            highlightAlpha: 100,
            highlightColor: processColor('#30A2FF'),
          }
        },
        {
          values: [
            {y: 10}, {y: 95}, {y: 72}, {y: 190}, {y: 0}, {y: 109}, {y: 105}, {y: 99}, {y: 95}
          ],
          label: 'Expense',
          config: {
            color: processColor('#F99B7D'),
            barShadowColor: processColor('gray'),
            highlightAlpha: 90,
            valueTextSize:12,
            highlightColor: processColor('gray'),
          }
        }
      ],

        config: {
          barWidth: 0.3,
        }
      },
      highlights: [{x: 3}, {x: 6}],
      xAxis: {
        valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        granularityEnabled: true,
        granularity : 1,
      }
    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
     
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
      console.log("=========> ",entry.y,entry.x)
    }

    console.log(event.nativeEvent)
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={{height:40}}>
          <Text> selected entry</Text>
          <Text style={styles.infoMonth}> {this.state.selectedEntry}</Text>
        </View>


        <View style={styles.container}>
          <BarChart
            style={styles.chart}
            data={this.state.data}
            xAxis={this.state.xAxis}
            animation={{durationX: 2000}}
            legend={this.state.legend}
            gridBackgroundColor={processColor('#ffffff')}
            visibleRange={{x: { min: 5, max: 5 }}}
            drawBarShadow={false}
            drawValueAboveBar={true}
            drawHighlightArrow={true}
            onSelect={this.handleSelect.bind(this)}
            highlights={this.state.highlights}
            onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginBottom:40,
  },
  chart: {
    flex: 1
  },
  infoMonth:{
    fontWeight:'500',
    color:COLOR.black,

  }
});

export default BarChartScreen;
