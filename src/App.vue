<template>
  <Layout>
    <TheHeader />
    <TheContainer />
  </Layout>
</template>

<script>
import Layout from "./components/Layout";
import TheHeader from "./components/TheHeader";
import TheContainer from "./components/TheContainer";
import "./sass/main.scss";

export default {
  components: { Layout, TheHeader, TheContainer },
};
</script>
