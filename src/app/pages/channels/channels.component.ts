import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SignalGroup {
  name: string;
  url: string;
  description?: string;
}

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent {
  discordInvite = 'https://discord.gg/Gygx3Y8CyN';

  signalGroups: SignalGroup[] = [
    {
      name: 'dorm.signal',
      url: 'https://signal.group/#CjQKIBxEA11NFTxoedwfB0BmVDlZCR80Lr-_18PJa8ahmZ1lEhBKjE3-GOfGT2I99htsg5nY',
      description: 'main group',
    },
  ];

  dormmatrixInvite = 'https://matrix.to/#/#entrance:matrix.dorm.social';
}
