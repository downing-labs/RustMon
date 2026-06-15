import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UptimePipe } from './uptime.pipe';
import { UptimeFixedPipe } from './uptimeFixed.pipe';
import { PortRemovePipe } from './port-remove.pipe';
import { TableModule } from 'primeng/table';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PopoverModule } from 'primeng/popover';
import { SidebarModule } from 'primeng/sidebar';

import { ChatComponent } from './chat/chat.component';
import { PromptModule } from './prompt/prompt.module';
import { PlayersComponent } from './players/players.component';
import { ConfigComponent } from './config/config.component';
import { PlayerToolsComponent } from './player-tools/player-tools.component';
import { UmodComponent } from './umod/umod.component';
import { PermsComponent } from './perms/perms.component';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    UptimePipe,
    UptimeFixedPipe,
    PortRemovePipe,
    ChatComponent,
    PlayersComponent,
    ConfigComponent,
    PlayerToolsComponent,
    UmodComponent,
    PermsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TableModule,
    ToggleSwitchModule,
    ContextMenuModule,
    ToastModule,
    ConfirmDialogModule,
    PopoverModule,
    SidebarModule,
    PromptModule,
    DropdownModule,
    TooltipModule,
    FontAwesomeModule,
  ]
})
export class DashboardModule { }
