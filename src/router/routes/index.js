// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartMapsRoutes from './ChartsMaps'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'

// new routes Start
import OverallSnapshotRoutes from './OverallSnapshot'
import FunnelMappingRoutes from './FunnelMapping'
import Dv360PerformanceRoutes from './Dv360Performance'
import FacebookPerformanceRoutes from './FacebookPerformance'
import YoutubePerformanceRoutes from './YoutubePerformance'
import LinkedinPerformanceRoutes from './LinkedinPerformance'
import TwitterPerformanceRoutes from './TwitterPerformance'
import AmazonPerformanceRoutes from './AmazonPerformance'
import LeadManagementRoutes from './LeadManagement'
import LandingPageRoutes from './LandingPage'
import UserRoutes from './ManageUsers'
import LMSRoutes from './Lms'
// new routes End

// ** Document title
const TemplateTitle = '%s - Cm-Galaxy Dashboard'

// ** Default Route
const DefaultRoute = '/overall-snapshot'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FunnelMappingRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartMapsRoutes,
  ...ChartMapsRoutes,
  ...OverallSnapshotRoutes,
  ...Dv360PerformanceRoutes,
  ...FacebookPerformanceRoutes,
  ...YoutubePerformanceRoutes,
  ...LinkedinPerformanceRoutes,
  ...TwitterPerformanceRoutes,
  ...AmazonPerformanceRoutes,
  ...LeadManagementRoutes,
  ...LandingPageRoutes, 
  ...LMSRoutes, 
 ...UserRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
