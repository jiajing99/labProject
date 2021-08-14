<template>
    <div>
        <!-- <el-row :gutter="20">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card shadow="hover">
                        <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card shadow="hover">
                        <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                    </el-card>
                </el-col>
            </el-row>
        </el-row> -->
        <el-row :gutter="25">
            <el-col :span="12">
                <el-card shadow="hover">
                    <template #header>
                            <div class="clearfix">
                                <span>XXX
                                </span>
                            </div>
                        </template>
                    <el-image style="height: 500px" :src="src" fit="fill"></el-image>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <template #header>
                            <div class="clearfix">
                                <span>XXX
                                </span>
                            </div>
                        </template>
                    <el-image style="height: 500px" :src="src" fit="fill"></el-image>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8"><span></span></el-col>
            <el-col :span="8" style="text-align:center">
                <span style="font-size: 27px; font-weight: 450; color: #2B3E52">识别结果：{{result}}</span>
            </el-col>
            <el-col :span="8" style="text-align:center">
                <el-button type="primary" round>暂停</el-button>
                <el-button type="primary" round>开始</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-card shadow="hover" style="height:403px;">
                        <template #header>
                            <div class="clearfix">
                                <span>XXX
                                </span>
                            </div>
                        </template>
                        <!-- <schart ref="line" class="schart" canvasId="line" :options="options"></schart> -->
                    </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import {getResult} from "../api/index";
import axios from 'axios'

export default {
    name: "dashboard",
    // setup(){
    //     getResult().then(response =>{
    //         console.log(response);
    //     });
    // },
    data() {
        return {
            src: require('../assets/img/img.jpeg'),
            result: "暂无"
        };
    },
    created() {
        console.log('12312312312312')
        this.getResponse()
    },

    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() +
                    1}/${date.getDate()}`;
            });
        },
        getResponse() {
            let url = 'http://localhost:8000/result'
            const config={
                method: 'get',
                url: url,
                headers: {
                    'Access-Control-Allow-Origin':'*'
                },
                data: {

                }
            }
            axios.request(config)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
};
</script>

<style scoped>
.bg-purple-dark {
    background: #99a9bf;
}
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>
