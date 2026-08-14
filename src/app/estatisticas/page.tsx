import PageLayout from "@/components/layout/PageLayout";

import {
  StatisticsCover,
  StatisticsToday,
  StatisticsPerformance,
} from "@/components/statistics";

import styles from "./page.module.css";

export default function EstatisticasPage() {
  return (
    <PageLayout>
      <StatisticsCover />

      <div className={styles.todayRow}>
        <StatisticsToday />
        <StatisticsPerformance />
      </div>
    </PageLayout>
  );
}