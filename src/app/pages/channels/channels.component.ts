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
  discordInvite = 'https://discord.gg/ccWJu4xXR6';

  signalGroups: SignalGroup[] = [
    {
      name: 'dorm.signal',
      url: 'https://signal.group/#CjQKIBxEA11NFTxoedwfB0BmVDlZCR80Lr-_18PJa8ahmZ1lEhBKjE3-GOfGT2I99htsg5nY',
      description: 'main group',
    },
    {
      name: 'nsfw.dorm.signal',
      url: 'https://signal.group/#CjQKIExscEr4gPADwpUH86xPLzvUbWUkyiH_w-zYhH4EGyYHEhAh-uA5RljQDLAKu9bU-hJd',
      description: 'nsfw content',
    },
    {
      name: 'extra.dorm.signal',
      url: 'https://signal.group/#CjQKIPO6ByCI1brq91pKt0YvvTlBiV5R01k8FdbmBQ1doli3EhAmF-fguQJDmwzs2iXDR4zj',
      description: 'offtopic chat',
    },
  ];

  dormmatrixInvite = 'https://matrix.to/#/#dormmatrix:matrix.dorm.social';
}
