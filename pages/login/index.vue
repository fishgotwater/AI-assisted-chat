<template>
	<view class="yujl-container-wrap">
		<view class="yujl-container">
			<uni-section title="手机号码登录" sub-title="登录后可享受更多专属产品和服务" titleFontSize="46rpx" titleColor="#2F2F30" subTitleFontSize="26rpx" subTitleColor="#B3B3B3"></uni-section>
			<view class="yujl-form-wrap">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="formData" label-position="top">
					<uni-forms-item label="手机号" required name="phone">
						<uni-easyinput type="number" v-model="formData.phone" trim="all" maxlength="11" placeholder="请输入手机号码" />
					</uni-forms-item>
					<uni-forms-item label="验证码" required name="code">
						<uni-easyinput v-model="formData.code" trim="all" maxlength="6" placeholder="请输入短信验证码" >
							<template #right>
								<button v-if="!clicked" type="primary" plain="true" size="mini" @click="onRetrieve">{{btnText}}</button>
								<view v-if="clicked" class="countdown">
									<uni-countdown :show-day="false" :showHour="false" :showMinute="false" :second="30" @timeup="onTimeup"></uni-countdown>
									<text>秒</text>
								</view>
							</template>
						</uni-easyinput>
					</uni-forms-item>
				</uni-forms>
				<button class="yujl-button" type="primary" @click="submit">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formData: {
				phone: '',
				code: '',
			},
			// 校验规则
			rules: {
				phone: {
					rules: [{
						required: true,
						errorMessage: '手机号不能为空'
					}]
				},
				code: {
					rules: [{
						required: true,
						errorMessage: '验证码不能为空'
					}]
				}
			},
			btnText: '获取验证码',
			clicked: false,
		}
	},
	computed: {
	},
	methods: {
		onRetrieve() {
			this.clicked = true;
			// 请求后端发送验证码TODO
		},
		// 倒计时结束
		onTimeup() {
			this.clicked = false;
			if(this.btnText !== '再次获取') {
				this.btnText = '再次获取';
			}
		},
		submit() {
			/**
			 * 1.验证表单
			 * 2.发送注册登录请求
			 * 3.请求返回失败，提示
			 * 4.请求返回成功，跳转
			 */
			this.$refs.valiForm.validate().then(res => {
				console.log('success', res);
				// 发送注册登录请求TODO
				// uni.showToast({
				// 	title: err.msg || err,
				// 	icon: "error",
				// 	duration: 3000
				// })
				// 请求成功
				uni.navigateBack();
			}).catch(err => {
				console.log('err', err);
				uni.showModal({
					title: "温馨提示",
					content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
					showCancel: false,
					confirmText: "确定"
				})
			})
		},
	}
}
</script>

<style lang="scss" scoped>
	@import '../../common/uni.css';
	.yujl-container-wrap {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.yujl-container {
		flex: 1;
		padding: 72rpx 60rpx 100rpx 60rpx;
		background: #FFFFFF;
	}
	.yujl-form-wrap {
		margin-top: 100rpx;
	}
	.countdown {
		display: flex;
		align-items: center;
		padding-right: 10rpx;
	}
	.yujl-button {
		margin-top: 50rpx;
	}
</style>