/**
 * Created by Wagnxx on 2019/1/2.
 */
import React from 'react';
import {StyleSheet, Text, View,FlatList,RefreshControl,Image} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import NavigationBar from '../components/NavigationBar'
import ProjectRow from '../components/ProjectRow'

export default class PopularScreen extends React.Component {

    constructor(props){
        super(props)
        this.state={
            languages:['javascript','java','ios','android']
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'热门'}
                />
                <ScrollableTabView
                    tabBarBackgroundColor="#63b8ff"
                    tabBarActiveTextColor="#fff"
                    tabBarInactiveTextColor="#f5ffaa"
                    tabBarUnderlineStyle={{backgroundColor:"#e7e7e7",height:2}}
                >
                    {
                        this.state.languages.map((item,ind)=>{
                            return <PopularTab tabLabel={item} key={`tab${ind}`} />
                                })
                                }

                </ScrollableTabView>
            </View>);
    }
}

class PopularTab extends React.Component {
    constructor(props){
        super(props)
        this.state={
            dataSource:[],
            isLoading:true
        }
    }
    static defualtProps={
        tabLabel:'javascript'
    }
    componentDidMount(){
        this.loadData()
    }
    handleRefresh=()=>{
        this.loadData();
    }
    loadData=()=>{
        this.setState({
            isLoading:true
        })
        fetch(`https://api.github.com/search/repositories?q=${this.props.tabLabel}&sort=stars`)
            .then(res=>res.json())
            .then(json=>{
                this.setState({
                    dataSource:json.items,isLoading:false
                })
            })
    }

    _keyExtractor = (item, index) => ('' + item.id + index );

    render(){
        return <FlatList
            data={this.state.dataSource}
            renderItem={({item})=><ProjectRow item={item}/>}
            keyExtractor={this._keyExtractor}
            refreshControl={
                <RefreshControl
                    refreshing={this.state.isLoading}
                    onRefresh={this.handleRefresh}
                    tintColor="#63B8FF"
                    title="正在加载..."
                    titleColor="#63B8FF"
                    colors={['red', 'blue','yellow']}
                    progressBackgroundColor="green"

                />
            }
        />
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerTitle:{
        fontWeight:'800',
    },
    description:{
        tintColor:"#777"
    },
    itemBot:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    }
});