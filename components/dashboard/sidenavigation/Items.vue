<template>
  <ul class="md:pl-5">
    <sidenav-item title="Home" to="/">
      <home-icon />
    </sidenav-item>

    <sidenav-item title="Bills" to="/admin/bills">
      <bills-icon />
    </sidenav-item>

    <sidenav-item title="Applications" to="/admin/applications">
      <applications-icon />
    </sidenav-item>

    <sidenav-item title="Monitoring" to="/admin/monitoring">
      <monitoring-icon />
    </sidenav-item>

    <sidenav-item title="Demographics" to="/admin/demographics">
      <demographics-icon />
    </sidenav-item>

    <sidenav-item title="Analytics" to="/admin/analytics">
      <analytics-icon />
    </sidenav-item>

    <sidenav-item title="Documentation" to="/admin/documentation">
      <documentation-icon />
    </sidenav-item>
  </ul>
</template>

<script>
import SidenavItem from './Item.vue';

/* ICONS */
import HomeIcon from './icons/Home.vue';
import BillsIcon from './icons/Bills.vue';
import AnalyticsIcon from './icons/Analytics.vue';
import MonitoringIcon from './icons/Monitoring.vue';
import DemographicsIcon from './icons/Demographics.vue';
import ApplicationsIcon from './icons/Applications.vue';
import DocumentationIcon from './icons/Documentation.vue';

export default {
  name: 'SidenavItems',
  components: {
    HomeIcon,
    BillsIcon,
    SidenavItem,
    AnalyticsIcon,
    MonitoringIcon,
    DemographicsIcon,
    ApplicationsIcon,
    DocumentationIcon,
  },
};
</script>
