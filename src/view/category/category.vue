<template>
  <div>
    <bscroll class="content" :probe-type="2" @topscroll="goryclick" :pull-up-load="true" @pullingUp="gorypulling" ref="scroll">
    <ul>
      <li>hello world1</li>
      <li>hello world2</li>
      <li>hello world3</li>
      <li>hello world4</li>
      <li>hello world5</li>
      <li>hello world6</li>
      <li>hello world7</li>
      <li>hello world8</li>
      <li>hello world9</li>
      <li>hello world10</li>
      <li>hello world11</li>
      <li>hello world12</li>
      <li>hello world13</li>
      <li>hello world14</li>
      <li>hello world15</li>
      <li>hello world16</li>
      <li>hello world17</li>
      <li>hello world18</li>
      <li>hello world19</li>
      <li>hello world20</li>
      <li>hello world21</li>
      <li>hello world22</li>
      <li>hello world23</li>
      <li>hello world24</li>
      <li>hello world25</li>
      <li>hello world26</li>
      <li>hello world27</li>
      <li>hello world28</li>
      <li>hello world29</li>
      <li>hello world30</li>
      <li>hello world31</li>
      <li>hello world32</li>
      <li>hello world33</li>
      <li>hello world34</li>
      <li>hello world35</li>
      <li>hello world36</li>
      <li>hello world37</li>
      <li>hello world38</li>
      <li>hello world39</li>
      <li>hello world40</li>
      <li>hello world41</li>
      <li>hello world42</li>
      <li>hello world43</li>
      <li>hello world44</li>
      <li>hello world45</li>
      <li>hello world46</li>
      <li>hello world47</li>
      <li>hello world48</li>
      <li>hello world49</li>
      <li>hello world50</li>
      <li>hello world51</li>
      <li>hello world52</li>
      <li>hello world53</li>
      <li>hello world54</li>
      <li>hello world55</li>
      <li>hello world56</li>
      <li>hello world57</li>
      <li>hello world58</li>
      <li>hello world59</li>
      <li>hello world60</li>
      <li>hello world61</li>
      <li>hello world62</li>
      <li>hello world63</li>
      <li>hello world64</li>
      <li>hello world65</li>
      <li>hello world66</li>
      <li>hello world67</li>
      <li>hello world68</li>
      <li>hello world69</li>
      <li>hello world70</li>
      <li>hello world71</li>
      <li>hello world72</li>
      <li>hello world73</li>
      <li>hello world74</li>
      <li>hello world75</li>
      <li>hello world76</li>
      <li>hello world77</li>
      <li>hello world78</li>
      <li>hello world79</li>
      <li>hello world80</li>
      <li>hello world81</li>
      <li>hello world82</li>
      <li>hello world83</li>
      <li>hello world84</li>
      <li>hello world85</li>
      <li>hello world86</li>
      <li>hello world87</li>
      <li>hello world88</li>
      <li>hello world89</li>
      <li>hello world90</li>
      <li>hello world91</li>
      <li>hello world92</li>
      <li>hello world93</li>
      <li>hello world94</li>
      <li>hello world95</li>
      <li>hello world96</li>
      <li>hello world97</li>
      <li>hello world98</li>
      <li>hello world99</li>
      <li>hello world100</li>
    </ul>
    </bscroll>
  </div>
</template>

<script>
  import bscroll from "../../components/common/bscroll";
  export default {
    name: "home",
    components:{
      bscroll
    },
    methods:{
      goryclick(position){
        // console.log(position)
      },
      gorypulling(){
        // console.log('上拉加载更多')
        this.$refs.scroll.finishUp(
          console.log('上拉加载更多')
        )
      }
    }
  }
</script>

<style scoped>
.content{
  height: 190px;
  overflow: hidden;
}
</style>
